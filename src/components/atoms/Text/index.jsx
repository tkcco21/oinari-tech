import React from 'react'
import styled from 'styled-components'

import { customMedia } from '../../../media'

const StyledText = styled.h1`
  font-size: ${props => props.theme.fontSize.text.primary};
  ${customMedia.lessThan('m')`
    font-size: ${props => props.theme.fontSize.text.secondary};
  `};
`

export const Text = ({ children }) => <StyledText>{children}</StyledText>
