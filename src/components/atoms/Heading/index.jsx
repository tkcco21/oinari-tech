import React from 'react'
import styled from 'styled-components'

import { customMedia } from '../../../media'

const StyledTitle = styled.h1`
  font-size: ${props => props.theme.font.size.heading.secondary};
  letter-spacing: ${props => props.theme.font.space.little};
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
  ${customMedia.lessThan('m')`
    font-size: ${props => props.theme.font.size.heading.secondary};
  `};
`

export const Heading = ({ underline, children }) => (
  <StyledTitle underline={underline}>{children}</StyledTitle>
)
