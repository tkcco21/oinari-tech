import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header``

const StyledHeaderInner = styled.div`
  margin: 0 auto;
  padding: ${props => props.theme.space._32px} ${props => props.theme.space._24px};
  max-width: ${props => props.theme.width.max};
  width: ${props => props.theme.width.normal};
  border-bottom: 1px solid ${props => props.theme.color.border.light};
`

const StyledHeaderTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.heading.primary};
`
const StyledHeaderText = styled.p`
  color: ${props => props.theme.color.font.light};
  font-size: ${props => props.theme.fontSize.text.quaternary};
`

export const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderInner>
        <StyledHeaderTitle>MofMof</StyledHeaderTitle>
        <StyledHeaderText>Web系の技術的なブログ</StyledHeaderText>
      </StyledHeaderInner>
    </StyledHeader>
  )
}
