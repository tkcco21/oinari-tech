import React from 'react'
import { graphql } from 'gatsby'
// import Img from 'gatsby-image'

import { DynamicHelmet } from '../../utilities/dynamicHelmet'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'
import { StyledSns, StyledTitle, StyledArticleBody } from './style'
import { Base } from '../../components/layouts/Base'
import { SnsShare } from '../../components/SnsShare'

const Template = ({ location, data }) => {
  const { markdownRemark: post } = data
  const meta = useSiteMetadata()
  const { title, excerpt: description } = post.frontmatter
  const baseTitle = meta.title

  return (
    <Base pathname={location.pathname}>
      {DynamicHelmet({ title, baseTitle, description })}

      <article>
        <StyledTitle>{post.frontmatter.title}</StyledTitle>

        <StyledSns right>
          <SnsShare
            title={`${title} | ${baseTitle}`}
            excerpt={post.excerpt}
            baseUrl={meta.siteUrl}
            pathname={location.pathname}
          />
        </StyledSns>

        <StyledArticleBody
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>

      <StyledSns>
        <SnsShare
          title={`${title} | ${baseTitle}`}
          excerpt={post.excerpt}
          baseUrl={meta.siteUrl}
          pathname={location.pathname}
        />
      </StyledSns>
    </Base>
  )
}

export default Template

export const pageQuery = graphql`
  query BlogPostBySlug($path: String!) {
    markdownRemark(fields: { slug: { slugPath: { eq: $path } } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        excerpt
      }
    }
  }
`
