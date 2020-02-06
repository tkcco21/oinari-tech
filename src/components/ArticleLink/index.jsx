import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

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

export const ArticleLink = ({ post }) => (
  <StyledArticleLink to={post.fields.slug.slugPath}>
    <StyledArticleTitle>{post.frontmatter.title}</StyledArticleTitle>
    <StyledArticleDate>{post.frontmatter.date}</StyledArticleDate>
    <StyledArticleExcerpt>{post.excerpt}</StyledArticleExcerpt>
  </StyledArticleLink>
)
