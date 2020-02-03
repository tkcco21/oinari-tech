import React from 'react'
// import { Helmet } from 'react-helmet'

import { Base } from '../components/layouts/Base'

// eslint-disable-next-line react/display-name
export default ({ location }) => {
  return (
    <Base pathname={location.pathname}>
      <h1>About This Site</h1>
    </Base>
  )
}
