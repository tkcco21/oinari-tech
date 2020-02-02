import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Base } from '../components/layouts/Base'

const StyledBlogWrapper = styled.article`
  margin: 0 auto;
  padding: ${props => props.theme.space._48px} ${props => props.theme.space._32px};
  max-width: ${props => props.theme.width.max};
  width: ${props => props.theme.width.normal};
`

const Template = ({ location, data }) => {
  const { markdownRemark: post } = data
  return (
    <>
      <Base pathname={location.pathname}>
        <StyledBlogWrapper>
          <h1>{post.frontmatter.title}</h1>
          <div
            className="blog-post-content"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </StyledBlogWrapper>
      </Base>
    </>
  )
}

export default Template

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
