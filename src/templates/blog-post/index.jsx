import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { Base } from '../../components/layouts/Base'

const StyledFeatureImage = styled(Img)`
  margin-top: ${props => props.theme.space._24px};
`

const Template = ({ location, data }) => {
  const { markdownRemark: post } = data
  const featuredImgFluid =
    post.frontmatter.featuredImage && post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <>
      <Helmet title={post.frontmatter.title} />
      <Base pathname={location.pathname}>
        <main>
          <article className="blog-post-content">
            <h1>{post.frontmatter.title}</h1>
            {featuredImgFluid && <StyledFeatureImage fluid={featuredImgFluid} />}

            <div
              className="blog-post-content-body"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </article>
        </main>
      </Base>
    </>
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
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
