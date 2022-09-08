/** @jsx jsx */
import React from 'react'
import { jsx, Heading, Box, Flex } from 'theme-ui'

import { SEO } from 'components/common/seo'
import { graphql, HeadFC, Link, PageProps } from 'gatsby'
import Layout from 'components/common/layout'
import slugify from 'slugify'

type TagsTemplateProps = {
  tags: { group: TagGroup[] }
}

const TagsTemplate = ({
  data: {
    tags: { group },
  },
}: PageProps<TagsTemplateProps>) => {
  return (
    <Layout>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexFlow: `wrap` }}>
        <Heading as="h1" variant="styles.h1" sx={{ marginY: 4 }}>
          Tags
        </Heading>
        <Link sx={t => ({ ...t.styles?.a, color: `onSurface`, marginY: 2 })} to={`/blog`}>
          블로그 전체 목록 보기
        </Link>
      </Flex>
      <Box>
        {group.map(tag => (
          <Flex key={tag.name} mb={[1, 1, 2]} sx={{ alignItems: `center` }}>
            <Link
              sx={t => ({ ...t.styles?.a, variant: `links.listItem`, mr: 2 })}
              to={`/tags/${slugify(tag.name)}`}
            >
              {tag.name} <span sx={{ color: `onSurface` }}>({tag.count})</span>
            </Link>
          </Flex>
        ))}
      </Box>
    </Layout>
  )
}

export default TagsTemplate

export const Head: HeadFC<TagsTemplateProps> = ({ location }) => {
  return <SEO title={'Tags'} pathname={location.pathname} />
}

export const query = graphql`
  query {
    tags: allMdx(sort: { fields: tags___name, order: DESC }) {
      group(field: tags___name) {
        name: fieldValue
        count: totalCount
      }
    }
  }
`
