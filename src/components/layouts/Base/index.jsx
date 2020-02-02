import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../../../theme'
import { Head } from '../../Head'
import { Header } from '../Header'
import { Footer } from '../Footer'

export const Base = props => {
  const { pathname, children } = props
  return (
    <>
      <Head pathname={pathname} />
      <ThemeProvider theme={theme}>
        <Header />

        {children}

        <Footer />
      </ThemeProvider>
    </>
  )
}
