/** @jsx jsx */

import React from 'react'
import BlogList from 'components/blog/blog-list'
import Layout from 'components/common/layout'
import { SEO } from 'components/common/seo'
import { graphql, HeadFC, Link, PageProps } from 'gatsby'

import { jsx, Flex, Heading } from 'theme-ui'

type TagTemplateProps = {
  allMdx: { nodes: PostType[] }
}

type PageContextProps = {
  name: string
}

const TagTemplate = ({
  data: {
    allMdx: { nodes },
  },
  pageContext: { name },
}: PageProps<TagTemplateProps, PageContextProps>) => {
  return (
    <Layout>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexFlow: `wrap` }}>
        <Heading as="h1" variant="styles.h1" sx={{ marginY: 4 }}>
          {name}
        </Heading>
        <Link sx={t => ({ ...t.styles?.a, color: `onSurface`, marginY: 2 })} to={'/tags'}>
          테그 목록 보기
        </Link>
      </Flex>
      <BlogList posts={nodes} sx={{ mt: [2, 3] }} />
    </Layout>
  )
}

export default TagTemplate

export const Head: HeadFC<TagTemplateProps, PageContextProps> = ({ location, pageContext }) => (
  <SEO title={`Tag - ${pageContext.name}`} pathname={location.pathname} />
)

export const query = graphql`
  query ($slug: String!) {
    allMdx(
      sort: { fields: date, order: DESC }
      filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
    ) {
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
