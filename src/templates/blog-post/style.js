import styled from 'styled-components'

import { customMedia } from '../../media'

export const StyledSns = styled.div`
  display: flex;
  justify-content: ${props => (props.right ? 'flex-end' : 'flex-start')};
  margin-top: ${props => props.theme.space._16px};
  font-size: 0;
`

export const StyledTitle = styled.h1`
  padding: ${props => props.theme.space._8px};
  font-weight: ${props => props.theme.font.weight.bold};
  font-size: ${props => props.theme.font.size.heading.primary};
  letter-spacing: ${props => props.theme.font.space.little};
  border: 1px solid ${props => props.theme.color.border.light};
  background-color: ${props => props.theme.color.background.lighter};
  ${customMedia.lessThan('m')`
    font-size: ${props => props.theme.font.size.heading.secondary};
  `};
`

export const StyledArticleBody = styled.div`
  margin-top: ${props => props.theme.space._20px};
  line-height: 1.9;
  ${customMedia.lessThan('m')`
    margin-top: ${props => props.theme.space._12px};
  `};

  /* 記事の始まりは p か h2 タグで始める */
  & > h2,
  & > p {
    &:first-child {
      margin-top: 0;
    }
  }
  & > h2,
  & > h3,
  & > h4,
  & > h5,
  & > h6,
  & > p,
  & > img,
  & > .gatsby-resp-image-wrapper,
  & > table,
  & > ul,
  & > ol,
  & > blockquote,
  & > iframe {
    margin-top: ${props => props.theme.space._16px};
    font-size: ${props => props.theme.font.size.text.secondary};
    letter-spacing: ${props => props.theme.font.space.little};
    ${customMedia.lessThan('m')`
      margin-top: ${props => props.theme.space._8px};
      font-size: ${props => props.theme.font.size.text.tertiary};
    `};
  }

  & > .gatsby-highlight {
    /* margin: 0 -${props => props.theme.space._16px}; */
    font-size: ${props => props.theme.font.size.text.tertiary};
    ${customMedia.lessThan('m')`
      margin: 0 -${props => props.theme.space._8px};
      font-size: ${props => props.theme.font.size.text.quaternary};
    `};
    & > pre {
      padding: ${props => props.theme.space._12px} ${props => props.theme.space._16px};
      ${customMedia.lessThan('m')`
        padding: ${props => props.theme.space._8px} ${props => props.theme.space._12px};
      `};
    }
  }
  & > h2 {
    padding: ${props => props.theme.space._4px} ${props => props.theme.space._8px};
    font-weight: ${props => props.theme.font.weight.bold};
    font-size: ${props => props.theme.font.size.heading.secondary};
    border-left: 5px solid ${props => props.theme.color.accent.main};
    border-bottom: 1px solid ${props => props.theme.color.accent.main};
    background-color: ${props => props.theme.color.background.lighter};
    ${customMedia.lessThan('m')`
      margin-top: ${props => props.theme.space._16px};
      padding: ${props => props.theme.space._4px};
      font-size: ${props => props.theme.font.size.heading.tertiary};
    `};
  }
  & > h3 {
    padding: 0 ${props => props.theme.space._8px};
    font-weight: ${props => props.theme.font.weight.bold};
    font-size: ${props => props.theme.font.size.heading.secondary};
    border-left: 3px solid ${props => props.theme.color.accent.main};
    border-bottom: 1px solid ${props => props.theme.color.border.light};
    ${customMedia.lessThan('m')`
      padding-left: ${props => props.theme.space._4px};
      font-size: ${props => props.theme.font.size.heading.tertiary};
    `};
  }
  & > h4 {
    padding: ${props => props.theme.space._4px} ${props => props.theme.space._8px};
    font-weight: ${props => props.theme.font.weight.bold};
    font-size: ${props => props.theme.font.size.heading.tertiary};
    border-bottom: 1px solid ${props => props.theme.color.accent.main};
    ${customMedia.lessThan('m')`
      padding: 0 ${props => props.theme.space._4px};
      font-size: ${props => props.theme.font.size.heading.quaternary};
    `};
  }
  & > h5 {
    padding: ${props => props.theme.space._4px} ${props => props.theme.space._8px};
    font-weight: ${props => props.theme.font.weight.bold};
    font-size: ${props => props.theme.font.size.heading.quaternary};
    border-bottom: 1px solid ${props => props.theme.color.border.light};
    ${customMedia.lessThan('m')`
      padding: 0 ${props => props.theme.space._4px};
    `};
  }
  & > p {
    font-size: ${props => props.theme.font.size.text.secondary};
    ${customMedia.lessThan('m')`
      font-size: ${props => props.theme.font.size.text.tertiary};
    `};
    & > strong {
      padding: 0 ${props => props.theme.space._4px};
      font-weight: ${props => props.theme.font.weight.bold};
      font-size: 1.03em;
      text-decoration: underline;
    }
    & > strong,
    & > del {
      padding: 0 2px;
    }
  }
  & code {
    /* inline code */
    &.language-text {
      margin: 0 2px;
      padding: 2px 5px;
      font-size: 0.9em;
      ${customMedia.lessThan('m')`
        padding: 2px 4px;
      `};
    }
  }
  & a {
    color: ${props => props.theme.color.accent.link};
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
  & blockquote {
    font-size: ${props => props.theme.font.size.text.tertiary};
    padding: ${props => props.theme.space._4px};
    padding-left: ${props => props.theme.space._8px};
    color: ${props => props.theme.color.font.dark};
    border-left: 3px solid ${props => props.theme.color.background.light};
    background-color: ${props => props.theme.color.background.lighter};
    ${customMedia.lessThan('m')`
      padding-left: ${props => props.theme.space._8px};
      font-size: ${props => props.theme.font.size.text.quaternary};
    `};
  }

  /* リストは2階層まで。。。 */
  & > ul,
  & > ol {
    list-style: inherit;
    padding-left: ${props => props.theme.space._32px};
    ${customMedia.lessThan('m')`
      padding-left: ${props => props.theme.space._24px};
    `};
    & ul {
      list-style: circle;
    }
    & > li {
    }
    & > .task-list-item {
    }
    & ul,
    & ol {
      padding-left: ${props => props.theme.space._16px};
      ${customMedia.lessThan('m')`
        padding-left: ${props => props.theme.space._12px};
      `};
    }
  }
  & > ol {
    list-style: decimal;
  }
  & > img {
  }
  & > table {
    width: 100%;
    & th,
    & td {
      padding: ${props => props.theme.space._4px} ${props => props.theme.space._8px};
      border: 1px solid ${props => props.theme.color.border.light};
      background-color: ${props => props.theme.color.background.lightest};
      ${customMedia.lessThan('m')`
        padding: ${props => props.theme.space._4px};
      `};
    }
    & > thead,
    & > tbody {
    }
    & > thead {
      & > th,
      & > td {
      }
    }
    & > tbody {
      & > th,
      & > td {
      }
    }
  }
  & > iframe {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;
    width: ${props => props.theme.width.normal};
  }
  & > hr {
    margin: ${props => props.theme.space._32px} -${props => props.theme.space._4px};
  }
`
