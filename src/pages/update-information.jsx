import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import { Base } from '../components/layouts/Base'
import { ArticleLink } from '../components/ArticleLink'
import { Heading } from '../components/atoms/Heading'

// eslint-disable-next-line react/display-name
export default ({ location, data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <>
      <Helmet title="更新情報一覧" />
      <Base pathname={location.pathname}>
        <main>
          <section>
            <Heading>Update Information</Heading>

            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => (
                <ArticleLink post={post} key={post.id} />
              ))}
          </section>
        </main>
      </Base>
    </>
  )
}

export const query = graphql`
  query UpdateInformationQuery {
    allMarkdownRemark(
      filter: { fields: { slug: { articleType: { eq: "update-information" } } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug {
              slugPath
              articleType
            }
          }
        }
      }
    }
  }
`
