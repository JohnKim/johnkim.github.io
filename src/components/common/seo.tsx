import React from 'react'
import useSiteMetadata from 'hooks/use-site-metadata'
import { withPrefix } from 'gatsby'

type SEOProps = {
  title?: string
  description?: string
  pathname?: string
  canonicalUrl?: string
}

export const SEO: React.FC<React.PropsWithChildren<SEOProps>> = ({
  title,
  pathname,
  description,
  canonicalUrl,
  children,
}) => {
  const { title: defaultTitle, siteUrl, description: defaultDescription } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title title={seo.title} />
      <meta name="description" content={seo.description} />
      {/* OG Tags */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:image:alt" content={seo.description} />
      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image:alt" content={seo.description} />
      <meta name="twitter:creator" content="@johnkim0331" />{' '}
      {/* TODO 나중에 site meta 로 빼서 저장해야 할까 싶다.  */}
      <link rel="icon" type="image/png" sizes="32x32" href={withPrefix(`/favicon-32x32.png`)} />
      <link rel="icon" type="image/png" sizes="16x16" href={withPrefix(`/favicon-16x16.png`)} />
      <link rel="apple-touch-icon" sizes="180x180" href={withPrefix(`/apple-touch-icon.png`)} />
      <title>{seo.title}</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
      {children}
    </>
  )
}
