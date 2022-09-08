/** @jsx jsx */
import * as React from 'react'
import { Box, Container, Flex, Heading, jsx } from 'theme-ui'
import { graphql, HeadFC, Link, PageProps } from 'gatsby'
import { SEO } from 'components/common/seo'
import useSiteMetadata from 'hooks/use-site-metadata'
import Layout from 'components/common/layout'
import { visuallyHidden } from 'utils/styles/styles'
import Title from 'components/common/title'
import BlogList from 'components/blog/blog-list'

type MainTemplateProps = {
  allMdx: { nodes: PostType[] }
}

const MainTemplate = ({
  data: {
    allMdx: { nodes },
  },
}: PageProps<MainTemplateProps>) => {
  const { title } = useSiteMetadata()
  return (
    <Layout>
      <h1 sx={visuallyHidden}>{title}</h1>
      <Box
        sx={{
          p: [3, 4, 5],
          textAlign: 'center',
          bg: 'muted',
          mb: [4],
        }}
      >
        <div sx={{ fontWeight: `bold`, fontSize: [5, 7] }}>{title}</div>
        <div
          sx={{ fontWeight: `bold`, fontSize: [1, 3, 5] }}
        >{`" 그럼에도 불구하고, 코드로 말하는 개발 Blog "`}</div>
        <div
          sx={{ fontWeight: `light`, fontSize: [1, 2, 3] }}
        >{`Front-end, Back-end, Machine Learning, S/W Architecture`}</div>
      </Box>

      <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexFlow: `wrap` }}>
        <Heading variant="styles.h3" sx={{ marginY: 4 }}>
          최근 블로그 목록
        </Heading>
        <Link sx={t => ({ ...t.styles?.a, color: `onSurface`, marginY: 2 })} to={`/blog`}>
          전체 목록 보기
        </Link>
      </Flex>
      <BlogList posts={nodes} />
    </Layout>
  )
}

export default MainTemplate

export const Head: HeadFC<MainTemplateProps> = props => <SEO />

export const query = graphql`
  query {
    allMdx(
      sort: { fields: date, order: DESC }
      limit: 3
      filter: { source: { eq: "blog-posts" } }
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
