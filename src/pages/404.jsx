import React from 'react'
import styled from 'styled-components'

import { DynamicHelmet } from '../utilities/dynamicHelmet'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
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
  const meta = useSiteMetadata()
  const title = '404 ページが見つかりません'
  const baseTitle = meta.title
  const description = 'ページが見つかりません。'

  return (
    <Base pathname={location.pathname}>
      {DynamicHelmet({ title, baseTitle, description })}

      <StyledText>申し訳ございませんが、ページが存在しません。</StyledText>
    </Base>
  )
}
