import type { GatsbyNode } from 'gatsby'
import path from 'path'
import readingTime from 'reading-time'
import slugify from 'slugify'

// Setup import alias
export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        hooks: path.resolve(__dirname, 'src/hooks'),
      },
    },
  })
}

/**
 * Gatsby Node APIs during bootstrap sequence
 *
 * https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ actions, node, getNode, reporter }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const frontmatter = node.frontmatter as FrontmatterType

    if (node.parent == null) return
    const fileNode = getNode(node.parent)
    const source = fileNode?.sourceInstanceName

    // if (result.errors) {
    //   reporter.panicOnBuild(`There was an error loading your posts or pages`, result.errors)
    //   return
    // }

    console.log(`${node.internal.type}(${source}) ${frontmatter.title}`)

    // source
    createNodeField({
      node,
      name: `source`,
      value: source,
    })

    // slug
    createNodeField({
      node,
      name: `slug`,
      value: `/${frontmatter.slug || slugify(frontmatter.title)}`,
    })

    // timeToRead
    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body as string),
    })

    // defer
    createNodeField({
      node,
      name: `defer`,
      value: frontmatter.defer || false,
    })

    // banner
    createNodeField({
      node,
      name: `banner`,
      value: frontmatter.banner,
    })

    // tags
    createNodeField({
      node,
      name: `tags`,
      value:
        frontmatter.tags == null
          ? null
          : frontmatter.tags.map((tag: string) => ({
              name: tag,
              slug: slugify(tag),
            })),
    })

    console.log(` [${source}] ${frontmatter.slug}`)
  }
}

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = async ({
  actions,
}) => {
  console.log(`------> createSchemaCustomization`)

  const { createTypes } = actions

  // Extensions and directives
  // https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/#extensions-and-directives
  createTypes(
    `#graphql
        type Mdx implements Node {

          # from fields
          timeToRead: Float! @proxy(from: "fields.timeToRead.minutes")
          wordCount: Int! @proxy(from: "fields.timeToRead.words")
          slug: String! @proxy(from: "fields.slug")
          defer: Boolean @proxy(from: "fields.defer")
          tags: [PostTag] @proxy(from: "fields.tags")
          banner: File @fileByRelativePath @proxy(from: "fields.banner")
          source: String! @proxy(from: "fields.source")

          # from frontmatters directly
          title: String! @proxy(from: "frontmatter.title")
          description: String @proxy(from: "frontmatter.description")
          date: Date @dateformat @proxy(from: "frontmatter.date")
        }

        type PostTag {
            name: String
            slug: String
        }
      `,
  )
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  console.log(`------> createPages`)
  const { createPage } = actions

  const mainTemplate = path.resolve(__dirname, 'src/templates/main_template.tsx')
  const blogTemplate = path.resolve(__dirname, 'src/templates/blog_template.tsx')
  const postTemplate = path.resolve(__dirname, 'src/templates/post_template.tsx')
  const pageTemplate = path.resolve(__dirname, 'src/templates/page_template.tsx')
  const tagsTemplate = path.resolve(__dirname, 'src/templates/tags_template.tsx')
  const tagTemplate = path.resolve(__dirname, 'src/templates/tag_template.tsx')

  // Main 페이지
  createPage({
    path: '/',
    component: mainTemplate,
  })

  // Blog 리스트 페이지
  createPage({
    path: '/blog',
    component: blogTemplate,
  })

  createPage({
    path: '/tags',
    component: tagsTemplate,
  })

  const result = await graphql<CreatePagesQueryResultType>(
    `
      query {
        allMdx(sort: { fields: date, order: DESC }) {
          nodes {
            internal {
              contentFilePath
            }
            # parent {
            #   ... on File {
            #     sourceInstanceName
            #   }
            # }
            id
            slug
            source
            defer
          }
        }

        tags: allMdx(sort: { fields: tags___name, order: DESC }) {
          group(field: tags___name) {
            fieldValue
          }
        }
      }
    `,
  )

  if (result.errors || result.data == null) {
    reporter.panicOnBuild(`There was an error loading your posts or pages`, result.errors)
    return
  }

  const mdxNodes = result.data.allMdx.nodes

  mdxNodes.forEach(node => {
    if (node.source == 'blog-posts') {
      createPage({
        path: node.slug,
        component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          id: node.id,
        },
        defer: node.defer,
      })
    } else if (node.source == 'blog-pages') {
      createPage({
        path: node.slug,
        component: `${pageTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          id: node.id,
        },
        defer: node.defer,
      })
    }
  })

  const tags = result.data.tags.group

  if (tags.length > 0) {
    tags.forEach(tag => {
      createPage({
        path: `/tags/${slugify(tag.fieldValue)}`.replace(/\/\/+/g, `/`),
        component: tagTemplate,
        context: {
          name: tag.fieldValue,
          slug: slugify(tag.fieldValue),
        },
      })
    })
  }
}
