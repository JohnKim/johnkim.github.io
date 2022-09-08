import React from 'react'
import useSiteMetadata from 'hooks/use-site-metadata'

type SEOProps = {
  title?: string
  description?: string
  pathname?: string
}

export const SEO: React.FC<React.PropsWithChildren<SEOProps>> = ({ title, pathname, children }) => {
  const { title: defaultTitle, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <link
        id="favicon-icon"
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
      {children}
    </>
  )
}
