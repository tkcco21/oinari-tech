import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { customMedia } from '../../media'

const StyledArticleLink = styled(Link)`
  display: block;
  position: relative;
  padding: ${props => props.theme.space._8px} ${props => props.theme.space._12px};
  border-top: 1px solid ${props => props.theme.color.border.light};
  &:first-of-type {
    border: none;
  }
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid ${props => props.theme.color.border.light};
    background-color: ${props => props.theme.color.background.lighter};
    opacity: 0;
    z-index: 1;
    content: '';
    transition: opacity 0.5s;
  }
  &:hover:after {
    opacity: ${props => props.theme.color.opacity.hover};
  }
  ${customMedia.lessThan('m')`
    padding: ${props => props.theme.space._16px} ${props => props.theme.space._8px};
  `};
`
const StyledArticleLinkInner = styled.div`
  position: relative;
  z-index: 2;
`
const StyledArticleTitle = styled.h2`
  font-size: ${props => props.theme.font.size.heading.secondary};
  letter-spacing: ${props => props.theme.font.space.little};
  ${customMedia.lessThan('m')`
    font-size: ${props => props.theme.font.size.heading.tertiary};
  `};
`
const StyledArticleDate = styled.p`
  margin-top: ${props => props.theme.space._4px};
  color: ${props => props.theme.color.accent.main};
  font-weight: bold;
  font-size: ${props => props.theme.font.size.text.quaternary};
  letter-spacing: ${props => props.theme.font.space.little};
`
const StyledArticleExcerpt = styled.p`
  margin-top: ${props => props.theme.space._4px};
  padding: ${props => props.theme.space._4px} 0;
  padding-left: ${props => props.theme.space._8px};
  font-size: ${props => props.theme.font.size.text.tertiary};
  letter-spacing: ${props => props.theme.font.space.little};
  border-left: 2px solid ${props => props.theme.color.border.light};
`

export const ArticleLink = ({ post }) => (
  <StyledArticleLink to={post.fields.slug.slugPath}>
    <StyledArticleLinkInner>
      <StyledArticleTitle>{post.frontmatter.title}</StyledArticleTitle>
      <StyledArticleDate>{post.frontmatter.date}</StyledArticleDate>
      <StyledArticleExcerpt>{post.frontmatter.excerpt}</StyledArticleExcerpt>
    </StyledArticleLinkInner>
  </StyledArticleLink>
)
