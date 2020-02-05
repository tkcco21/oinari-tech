import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.heading.primary};
`

export const Heading = ({ children }) => <StyledTitle>{children}</StyledTitle>
