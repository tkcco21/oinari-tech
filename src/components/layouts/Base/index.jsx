import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../../../theme'
import { Header } from '../Header'
import { Footer } from '../Footer'

// eslint-disable-next-line react/display-name
export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Header />

    {children}

    <Footer />
  </ThemeProvider>
)
