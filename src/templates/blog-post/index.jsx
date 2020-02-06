import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { StyledArticle } from './style'

import { Base } from '../../components/layouts/Base'

const StyledArticleWrapper = styled.article`
  padding: 0 ${props => props.theme.space._16px};
  padding-top: ${props => props.theme.space._12px};
  padding-bottom: ${props => props.theme.space._32px};
  background-color: ${props => props.theme.color.background.lighter};
`
const StyledTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.heading.primary};
`
const StyledFeatureImage = styled(Img)`
  margin: 0 auto;
  margin-top: ${props => props.theme.space._24px};
  max-width: 920px;
  width: 90%;
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
          <StyledArticleWrapper>
            <StyledTitle>{post.frontmatter.title}</StyledTitle>
            {featuredImgFluid && <StyledFeatureImage fluid={featuredImgFluid} />}

            <StyledArticle
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </StyledArticleWrapper>
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
            fluid(maxWidth: 920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
