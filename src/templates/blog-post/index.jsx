import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import { Base } from '../../components/layouts/Base'

const Template = ({ location, data }) => {
  const { markdownRemark: post } = data
  return (
    <>
      <Helmet title={post.frontmatter.title} />
      <Base pathname={location.pathname}>
        <main>
          <article className="blog-post-content">
            <h1>{post.frontmatter.title}</h1>
            <div
              className="blog-post-content-body"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </article>
        </main>
      </Base>
    </>
  )
}

export default Template

export const pageQuery = graphql`
  query BlogPostBySlug($path: String!) {
    markdownRemark(fields: { slug: { slugPath: { eq: $path } } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
