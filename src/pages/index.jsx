import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import { Base } from '../components/layouts/Base'

const StyledMainWrapper = styled.main`
  margin: 0 auto;
  padding: ${props => props.theme.space._24px} ${props => props.theme.space._32px};
  max-width: ${props => props.theme.width.max};
  width: ${props => props.theme.width.normal};
`
const StyledArticleLink = styled(Link)`
  display: block;
  padding: ${props => props.theme.space._24px} ${props => props.theme.space._8px};
  border-top: 1px solid ${props => props.theme.color.border.light};
  &:first-child {
    border: none;
  }
  &:hover {
    text-decoration: underline;
  }
`
const StyledArticleTitle = styled.h2`
  font-size: ${props => props.theme.fontSize.heading.secondary};
`
const StyledArticleDate = styled.p`
  margin-top: ${props => props.theme.space._4px};
  color: ${props => props.theme.color.accent.main};
  font-weight: bold;
  font-size: ${props => props.theme.fontSize.text.quaternary};
`
const StyledArticleExcerpt = styled.p`
  margin-top: ${props => props.theme.space._4px};
  padding: ${props => props.theme.space._4px} 0;
  padding-left: ${props => props.theme.space._4px};
  font-size: ${props => props.theme.fontSize.text.tertiary};
  border-left: 2px solid ${props => props.theme.color.border.light};
`

// eslint-disable-next-line react/display-name
export default ({ location, data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <>
      <Base pathname={location.pathname}>
        <StyledMainWrapper>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <StyledArticleLink key={post.id} to={post.frontmatter.path}>
                  <StyledArticleTitle>{post.frontmatter.title}</StyledArticleTitle>
                  <StyledArticleDate>{post.frontmatter.date}</StyledArticleDate>
                  <StyledArticleExcerpt>{post.excerpt}</StyledArticleExcerpt>
                </StyledArticleLink>
              )
            })}
        </StyledMainWrapper>
      </Base>
    </>
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
