import React from 'react'
import { Helmet } from 'react-helmet'

import { useSiteMetadata } from '../../hooks/useSiteMetadata'

export const Head = ({ pathname }) => {
  const meta = useSiteMetadata()
  return (
    <Helmet defer={false} defaultTitle={meta.title} titleTemplate={`%s | ${meta.title}`}>
      <html lang="ja" />
      <link rel="canonical" href={`${meta.siteUrl}${pathname}`} />
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      <meta property="og:url" content={meta.siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={meta.title} />
      {/* <meta property="og:image" content={`${siteUrl}${icon}`} /> */}

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={meta.social.twitter} />
    </Helmet>
  )
}
