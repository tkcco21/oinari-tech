import React from 'react'
import { graphql } from 'gatsby'
// import Img from 'gatsby-image'

import { DynamicHelmet } from '../../utilities/dynamicHelmet'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'
import { StyledTitle, StyledArticleBody } from './style'
import { Base } from '../../components/layouts/Base'

const Template = ({ location, data }) => {
  const { markdownRemark: post } = data
  const meta = useSiteMetadata()
  const { title } = post.frontmatter
  const baseTitle = meta.title
  const description = post.excerpt

  return (
    <Base pathname={location.pathname}>
      {DynamicHelmet({ title, baseTitle, description })}

      <article>
        <StyledTitle>{post.frontmatter.title}</StyledTitle>
        <StyledArticleBody
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </Base>
  )
}

export default Template

export const pageQuery = graphql`
  query BlogPostBySlug($path: String!) {
    markdownRemark(fields: { slug: { slugPath: { eq: $path } } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
