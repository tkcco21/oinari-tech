import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import { Base } from '../components/layouts/Base'

const StyledTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.heading.primary};
`
const StyledArticleLink = styled(Link)`
  display: block;
  padding: ${props => props.theme.space._24px} ${props => props.theme.space._8px};
  border-top: 1px solid ${props => props.theme.color.border.light};
  &:first-of-type {
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
  padding-left: ${props => props.theme.space._8px};
  font-size: ${props => props.theme.fontSize.text.tertiary};
  border-left: 2px solid ${props => props.theme.color.border.light};
`

// eslint-disable-next-line react/display-name
export default ({ location, data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <>
      <Helmet title="更新情報一覧" />
      <Base pathname={location.pathname}>
        <main>
          <section>
            <StyledTitle>Update Information</StyledTitle>
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => {
                return (
                  <StyledArticleLink key={post.id} to={post.fields.slug.slugPath}>
                    <StyledArticleTitle>{post.frontmatter.title}</StyledArticleTitle>
                    <StyledArticleDate>{post.frontmatter.date}</StyledArticleDate>
                    <StyledArticleExcerpt>{post.excerpt}</StyledArticleExcerpt>
                  </StyledArticleLink>
                )
              })}
          </section>
        </main>
      </Base>
    </>
  )
}

export const query = graphql`
  query UpdateInformationQuery {
    allMarkdownRemark(
      filter: { fields: { slug: { articleType: { eq: "update-information" } } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug {
              slugPath
              articleType
            }
          }
        }
      }
    }
  }
`
