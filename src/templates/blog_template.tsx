/** @jsx jsx */
import React from 'react'
import { graphql, HeadFC, Link, PageProps } from 'gatsby'
import { jsx, Flex, Heading } from 'theme-ui'
import { SEO } from 'components/common/seo'
import Layout from 'components/common/layout'
import BlogList from 'components/blog/blog-list'

type BlogTemplateProps = {
  allMdx: { nodes: PostType[] }
}

const BlogTemplate = ({
  data: {
    allMdx: { nodes },
  },
}: PageProps<BlogTemplateProps>) => {
  return (
    <Layout>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexFlow: `wrap` }}>
        <Heading as="h1" variant="styles.h1" sx={{ marginY: 4 }}>
          Blog
        </Heading>
        <Link sx={t => ({ ...t.styles?.a, color: `onSurface`, marginY: 2 })} to={`/tags`}>
          테그 목록 보기
        </Link>
      </Flex>
      <BlogList posts={nodes} sx={{ mt: [2, 3] }} />
    </Layout>
  )
}

export default BlogTemplate

export const Head: HeadFC<BlogTemplateProps> = ({ location }) => {
  return <SEO title={'Blog'} pathname={location.pathname} />
}

export const query = graphql`
  query {
    allMdx(sort: { fields: date, order: DESC }, filter: { source: { eq: "blog-posts" } }) {
      nodes {
        slug
        title
        date(formatString: "YYYY-MM-DD")
        excerpt
        timeToRead
        description
        tags {
          name
          slug
        }
      }
    }
  }
`
