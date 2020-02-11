import React from 'react'
import { Helmet } from 'react-helmet'

export const DynamicHelmet = ({ title, baseTitle, description }) => {
  const titleInfo = title
    ? [{ property: 'og:title', content: `${title} | ${baseTitle}` }]
    : []
  const descriptionInfo = description
    ? [
        { property: 'description', content: description },
        { property: 'og:description', content: description },
      ]
    : []
  return <Helmet title={title} meta={[...titleInfo, ...descriptionInfo]} />
}
