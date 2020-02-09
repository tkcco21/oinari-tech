import styled from 'styled-components'

import { customMedia } from '../../media'

export const StyledArticle = styled.div`
  margin-top: ${props => props.theme.space._16px};
  padding: ${props => props.theme.space._16px};
  padding-bottom: ${props => props.theme.space._32px};
  background-color: ${props => props.theme.color.background.lighter};
  ${customMedia.lessThan('m')`
    padding: ${props => props.theme.space._8px};
    padding-bottom: ${props => props.theme.space._24px};
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
  & > blockquote {
    margin-top: ${props => props.theme.space._12px};
    font-size: ${props => props.theme.fontSize.text.secondary};
    ${customMedia.lessThan('m')`
      font-size: ${props => props.theme.fontSize.text.tertiary};
    `};
  }

  & > .gatsby-highlight {
    margin: 0 -${props => props.theme.space._16px};
    font-size: ${props => props.theme.fontSize.text.tertiary};
    ${customMedia.lessThan('m')`
      margin: 0 -${props => props.theme.space._8px};
      font-size: ${props => props.theme.fontSize.text.quaternary};
    `};
    & > pre {
      padding: ${props => props.theme.space._12px} ${props => props.theme.space._16px};
      ${customMedia.lessThan('m')`
        padding: ${props => props.theme.space._8px} ${props => props.theme.space._12px};
      `};
    }
  }
  & > h2 {
    padding: ${props => props.theme.space._4px};
    padding-left: ${props => props.theme.space._8px};
    padding-right: ${props => props.theme.space._8px};
    font-size: ${props => props.theme.fontSize.heading.secondary};
    border-left: 5px solid ${props => props.theme.color.accent.main};
    border-bottom: 1px solid ${props => props.theme.color.accent.main};
    background-color: ${props => props.theme.color.background.lightest};
    ${customMedia.lessThan('m')`
      padding: ${props => props.theme.space._4px};
      font-size: ${props => props.theme.fontSize.heading.tertiary};
    `};
  }
  & > h3 {
    padding-left: ${props => props.theme.space._8px};
    font-size: ${props => props.theme.fontSize.heading.secondary};
    border-left: 3px solid ${props => props.theme.color.accent.main};
    border-bottom: 2px solid ${props => props.theme.color.border.light};
    ${customMedia.lessThan('m')`
      padding-left: ${props => props.theme.space._4px};
      font-size: ${props => props.theme.fontSize.heading.tertiary};
    `};
  }
  & > h4 {
    padding: ${props => props.theme.space._4px};
    padding-left: ${props => props.theme.space._8px};
    padding-right: ${props => props.theme.space._8px};
    font-size: ${props => props.theme.fontSize.heading.tertiary};
    border-bottom: 1px solid ${props => props.theme.color.accent.main};
    ${customMedia.lessThan('m')`
      padding: 0 ${props => props.theme.space._4px};
      font-size: ${props => props.theme.fontSize.heading.quaternary};
    `};
  }
  & > h5 {
    padding: ${props => props.theme.space._4px};
    font-size: ${props => props.theme.fontSize.heading.quaternary};
    border-bottom: 2px solid ${props => props.theme.color.border.light};
  }
  & > p {
    font-size: ${props => props.theme.fontSize.text.secondary};
    ${customMedia.lessThan('m')`
      font-size: ${props => props.theme.fontSize.text.tertiary};
    `};
    & > em,
    & > strong {
      padding: 0 ${props => props.theme.space._4px};
      text-decoration: underline;
    }
    & > strong,
    & > del {
      padding: 0 2px;
    }
    & strong {
      font-size: 1.03em;
    }
    & > code {
      /* inline code */
      &.language-text {
        padding: 2px 8px;
        font-size: 0.9em;
        ${customMedia.lessThan('m')`
          padding: 2px 4px;
        `};
      }
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
    font-size: ${props => props.theme.fontSize.text.tertiary};
    padding: ${props => props.theme.space._4px};
    padding-left: ${props => props.theme.space._12px};
    color: ${props => props.theme.color.font.dark};
    border-left: 3px solid ${props => props.theme.color.background.light};
    background-color: ${props => props.theme.color.background.lightest};
    ${customMedia.lessThan('m')`
      padding-left: ${props => props.theme.space._8px};
      font-size: ${props => props.theme.fontSize.text.quaternary};
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
  & > hr {
    margin: ${props => props.theme.space._32px} -${props => props.theme.space._4px};
  }
`
