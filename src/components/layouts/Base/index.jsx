import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { customMedia } from '../../../media'
import theme from '../../../theme'
import { Head } from '../../Head'
import { Header } from '../Header'
import { Footer } from '../Footer'

const StyledWrapper = styled.div`
  margin: 0 auto;
  padding: ${props => props.theme.space._32px};
  padding-bottom: ${props => props.theme.space._56px};
  max-width: ${props => props.theme.width.max};
  width: ${props => props.theme.width.normal};
  ${customMedia.lessThan('m')`
    padding: ${props => props.theme.space._16px} 0 ${props => props.theme.space._32px};
    width: ${props => props.theme.width.wide};
  `};
`

export const Base = props => {
  const { pathname, children } = props
  return (
    <>
      <Head pathname={pathname} />
      <ThemeProvider theme={theme}>
        <Header />

        <StyledWrapper>{children}</StyledWrapper>

        <Footer />
      </ThemeProvider>
    </>
  )
}
