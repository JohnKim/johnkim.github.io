/** @jsx jsx */

import React from 'react'

import { graphql, HeadFC, PageProps } from 'gatsby'
import { Heading, jsx } from 'theme-ui'
import Layout from 'components/common/layout'

import MdxShortCodes from 'components/blog/mdx-shortcodes'
import { SEO } from 'components/common/seo'
import { MDXProvider } from '@mdx-js/react'

type PageTemplateProps = {
  mdx: PageType
  children: React.ReactNode
}

const PageTemplate: React.FC<PageProps<PageTemplateProps>> = ({ data: { mdx }, children }) => {
  return (
    <Layout>
      <Heading as="h1" variant="styles.h1">
        {mdx.title}
      </Heading>

      <MDXProvider components={MdxShortCodes}>{children}</MDXProvider>
    </Layout>
  )
}

export default PageTemplate

// @TODO 아래 이슈는 나중에 해결될 예정이라고 한다. 우선 주석 처리 해두었음
// https://github.com/gatsbyjs/gatsby/discussions/25068?sort=old#discussioncomment-3438603
// export const Head: HeadFC<PageTemplateProps> = ({ data: { mdx }, location }) => (
//   <SEO title={mdx.title} pathname={location.pathname} />
// )

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      slug
      title
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
