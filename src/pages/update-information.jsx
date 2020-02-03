import React from 'react'
// import { Helmet } from 'react-helmet'
// import { Link, graphql } from 'gatsby'

import { Base } from '../components/layouts/Base'

// eslint-disable-next-line react/display-name
export default ({ location }) => {
  return (
    <Base pathname={location.pathname}>
      <h1>Update Information</h1>
    </Base>
  )
}
