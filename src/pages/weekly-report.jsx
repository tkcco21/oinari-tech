import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import { Base } from '../components/layouts/Base'
import { ArticleLink } from '../components/ArticleLink'
import { Heading } from '../components/atoms/Heading'
import { Text } from '../components/atoms/Text'

// eslint-disable-next-line react/display-name
export default ({ location, data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <>
      <Helmet title="週報一覧" />
      <Base pathname={location.pathname}>
        <main>
          <section>
            <Heading>Weekly Report</Heading>

            {posts.length ? (
              posts
                .filter(post => post.node.frontmatter.title.length > 0)
                .map(({ node: post }) => <ArticleLink post={post} key={post.id} />)
            ) : (
              <Text>記事が一つもありません。</Text>
            )}
          </section>
        </main>
      </Base>
    </>
  )
}

export const query = graphql`
  query WeeklyReportQuery {
    allMarkdownRemark(
      filter: { fields: { slug: { articleType: { eq: "weekly-report" } } } }
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
