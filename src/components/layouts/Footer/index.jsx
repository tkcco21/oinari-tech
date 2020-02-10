import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.color.background.darkest};
`

const StyledFooterInner = styled.div`
  margin: 0 auto;
  padding: ${props => props.theme.space._16px} ${props => props.theme.space._8px};
  max-width: ${props => props.theme.width.max};
  width: ${props => props.theme.width.normal};
`

const StyledFooterText = styled.p`
  color: ${props => props.theme.color.font.lightest};
  font-weight: ${props => props.theme.font.weight.medium};
  font-size: ${props => props.theme.font.size.text.tertiary};
  text-align: right;
`

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterInner>
        <StyledFooterText>© tkcco21</StyledFooterText>
      </StyledFooterInner>
    </StyledFooter>
  )
}
