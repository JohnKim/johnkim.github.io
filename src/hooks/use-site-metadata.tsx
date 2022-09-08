import { graphql, useStaticQuery } from 'gatsby'

type SiteMetadataType = {
  site: {
    siteMetadata: {
      title: string
      siteUrl: string
    }
  }
}

const useSiteMetadata = () => {
  const data = useStaticQuery<SiteMetadataType>(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
