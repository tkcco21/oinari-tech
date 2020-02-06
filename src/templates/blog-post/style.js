import styled from 'styled-components'

export const StyledArticle = styled.div`
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
  }

  & > .gatsby-highlight {
    margin: 0 -${props => props.theme.space._16px};
    font-size: ${props => props.theme.fontSize.text.tertiary};
    & > pre {
      padding: ${props => props.theme.space._12px} ${props => props.theme.space._16px};
    }
  }
  & > h2 {
    padding: ${props => props.theme.space._4px};
    padding-left: ${props => props.theme.space._8px};
    font-size: ${props => props.theme.fontSize.heading.secondary};
    border-left: 5px solid ${props => props.theme.color.accent.main};
    border-bottom: 1px solid ${props => props.theme.color.accent.main};
    background-color: ${props => props.theme.color.background.lightest};
  }
  & > h3 {
    padding: ${props => props.theme.space._4px};
    padding-left: ${props => props.theme.space._8px};
    padding-right: ${props => props.theme.space._8px};
    font-size: ${props => props.theme.fontSize.heading.secondary};
    border-bottom: 2px solid ${props => props.theme.color.accent.main};
  }
  & > h4 {
    padding-left: ${props => props.theme.space._8px};
    font-size: ${props => props.theme.fontSize.heading.tertiary};
    border-left: 3px solid ${props => props.theme.color.accent.main};
    border-bottom: 2px solid ${props => props.theme.color.border.light};
  }
  & > h5 {
    padding: ${props => props.theme.space._4px};
    font-size: ${props => props.theme.fontSize.heading.quaternary};
    border-bottom: 2px solid ${props => props.theme.color.border.light};
  }
  & > p {
    font-size: ${props => props.theme.fontSize.text.secondary};
    & > a {
      color: ${props => props.theme.color.accent.link};
      text-decoration: underline;
      &:hover {
        text-decoration: none;
      }
    }
    & > code {
      /* inline code */
      &.language-text {
        padding: 2px 8px;
      }
    }
  }
  & blockquote {
    font-size: ${props => props.theme.fontSize.text.tertiary};
    padding: ${props => props.theme.space._4px};
    padding-left: ${props => props.theme.space._12px};
    color: ${props => props.theme.color.font.dark};
    border-left: 3px solid ${props => props.theme.color.background.light};
    background-color: ${props => props.theme.color.background.lightest};
  }

  /* リストは2階層まで。。。 */
  & > ul,
  & > ol {
    list-style: inherit;
    padding-left: ${props => props.theme.space._32px};
    & ul {
      list-style: inherit;
    }
    & > li {
    }
    & > .task-list-item {
    }
    & ul,
    & ol {
      padding-left: ${props => props.theme.space._16px};
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
