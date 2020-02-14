import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.color.background.darkest};
`
const StyledFooterInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: ${props => props.theme.space._16px} ${props => props.theme.space._8px};
  max-width: ${props => props.theme.width.max};
  width: ${props => props.theme.width.normal};
`

const StyledFooterSnsLink = styled.a`
  margin-left: ${props => props.theme.space._12px};
  padding: ${props => props.theme.space._4px} ${props => props.theme.space._12px};
  font-weight: ${props => props.theme.font.weight.medium};
  font-size: ${props => props.theme.font.size.text.quaternary};
  background-color: ${props => props.theme.color.background.lighter};
  transition: 0.3s;
  &:first-child {
    margin-left: 0;
  }
  &:hover {
    color: ${props => props.theme.color.font.lightest};
    background-color: ${props => props.theme.color.accent.main};
  }
`
const StyledFooterText = styled.p`
  color: ${props => props.theme.color.font.lightest};
  font-weight: ${props => props.theme.font.weight.medium};
  font-size: ${props => props.theme.font.size.text.tertiary};
`

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterInner>
        <StyledFooterText>© tkcco21</StyledFooterText>
        <div>
          <StyledFooterSnsLink
            href="https://twitter.com/tkcco21"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </StyledFooterSnsLink>
          <StyledFooterSnsLink
            href="https://github.com/tkcco21"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </StyledFooterSnsLink>
        </div>
      </StyledFooterInner>
    </StyledFooter>
  )
}
