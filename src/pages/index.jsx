import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../theme'
import { Header } from '../components/layouts/Header'
import { Footer } from '../components/layouts/Footer'

// eslint-disable-next-line react/display-name
export default () => (
  <ThemeProvider theme={theme}>
    <Header />
    Hello world!
    <Footer />
  </ThemeProvider>
)
