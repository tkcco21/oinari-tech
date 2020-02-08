import React from 'react'
import styled from 'styled-components'

import { customMedia } from '../../../media'

const StyledTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.heading.primary};
  ${customMedia.lessThan('m')`
    font-size: ${props => props.theme.fontSize.heading.secondary};
  `};
`

export const Heading = ({ children }) => <StyledTitle>{children}</StyledTitle>
