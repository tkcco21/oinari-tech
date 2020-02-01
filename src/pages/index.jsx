import React from 'react'
import { Link, graphql } from 'gatsby'
// import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import Base from '../components/layouts/Base'

const StyledMainWrapper = styled.main`
  margin: 0 auto;
  padding: ${props => props.theme.space._48px} ${props => props.theme.space._32px};
  max-width: ${props => props.theme.width.max};
  width: ${props => props.theme.width.normal};
`

const StyledArticle = styled(Link)`
  display: block;
  margin-top: ${props => props.theme.space._24px};
  &:first-child {
    margin-top: 0;
  }
`

// eslint-disable-next-line react/display-name
export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Base>
      <StyledMainWrapper>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <StyledArticle key={post.id} to={post.frontmatter.path}>
                <h1>{post.frontmatter.title}</h1>
                <p>{post.frontmatter.date}</p>
                <p>{post.excerpt}</p>
              </StyledArticle>
            )
          })}
      </StyledMainWrapper>
    </Base>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
