/** @jsx jsx */

import React from 'react'
import { jsx, Heading, Divider } from 'theme-ui'
import { graphql, HeadFC, PageProps } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { SEO } from 'components/common/seo'
import Layout from 'components/common/layout'
import ItemTags from 'components/blog/item-tags'
import PostFooter from 'components/blog/post-footer'
import MdxShortCodes from 'components/blog/mdx-shortcodes'
import PostToc from 'components/blog/post-toc'
import useOffsetTop from 'hooks/use-offset-top'
import Comments from 'components/common/comments'

type PostTemplateProps = {
  mdx: PostType
  children: React.ReactNode
}

const px = [`32px`, `16px`, `8px`, `4px`]
const shadow = px.map(v => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`)

const PostTemplate = ({ data: { mdx }, children }: PageProps<PostTemplateProps>) => {
  const { ref, offsetTop } = useOffsetTop()

  return (
    <Layout>
      {mdx.tableOfContents && mdx.tableOfContents.items && (
        <PostToc items={mdx.tableOfContents.items} articleOffset={offsetTop} />
      )}

      <Heading as="h1" variant="styles.h1">
        {mdx.title}
      </Heading>
      {mdx.description && (
        <p sx={{ color: `onSurface`, my: 4, fontSize: [2, 3, 4] }}>{mdx.description}</p>
      )}
      {mdx.tags && (
        <React.Fragment>
          <div sx={{ mt: 3 }}>
            <ItemTags tags={mdx.tags} />
          </div>
        </React.Fragment>
      )}

      <p sx={{ color: `onSurface`, my: 3, fontSize: [1, 1, 1] }}>
        <time>{mdx.date}</time>
        {mdx.timeToRead && ` — `}
        {mdx.timeToRead && <span>{Math.ceil(mdx.timeToRead)} min read</span>}
      </p>

      <Divider />

      <section
        sx={{
          my: 5,
          '.gatsby-resp-image-wrapper': { my: [4, 4, 5] },
          variant: `layout.content`,
        }}
        ref={ref}
      >
        <MDXProvider components={MdxShortCodes}>{children}</MDXProvider>
      </section>
      <Comments />
      <PostFooter post={mdx} />
    </Layout>
  )
}

export default PostTemplate

export const Head: HeadFC<PostTemplateProps> = ({ data: { mdx }, location }) => {
  return <SEO title={mdx.title} pathname={location.pathname} />
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      slug
      title
      date(formatString: "YYYY-MM-DD")
      tags {
        name
        slug
      }
      description
      body
      excerpt
      timeToRead
      tableOfContents
      banner {
        childImageSharp {
          resize(width: 1200, quality: 90) {
            src
          }
        }
      }
    }
  }
`
