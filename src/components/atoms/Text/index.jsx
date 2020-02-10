import React from 'react'
import styled from 'styled-components'

import { customMedia } from '../../../media'

const StyledText = styled.h1`
  font-size: ${props => props.theme.font.size.text.primary};
  letter-spacing: ${props => props.theme.font.space.little};
  ${customMedia.lessThan('m')`
    font-size: ${props => props.theme.font.size.text.secondary};
  `};
`

export const Text = ({ children }) => <StyledText>{children}</StyledText>
