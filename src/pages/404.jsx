import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import { customMedia } from '../media'
import { Base } from '../components/layouts/Base'

const StyledText = styled.p`
  margin-top: ${props => props.theme.space._32px};
  font-size: ${props => props.theme.font.size.text.primary};
  letter-spacing: ${props => props.theme.font.space.little};
  ${customMedia.lessThan('m')`
    margin-top: ${props => props.theme.space._20px};
    font-size: ${props => props.theme.font.size.text.secondary};
  `};
`

// eslint-disable-next-line react/display-name
export default ({ location }) => {
  return (
    <>
      <Helmet title="このサイトについて" />
      <Base pathname={location.pathname}>
        <StyledText>申し訳ございませんが、ページが存在しません。</StyledText>
      </Base>
    </>
  )
}
