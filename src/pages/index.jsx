import React from 'react'
import { graphql } from 'gatsby'

import { DynamicHelmet } from '../utilities/dynamicHelmet'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { Base } from '../components/layouts/Base'
import { ArticleLink } from '../components/ArticleLink'
import { Heading } from '../components/atoms/Heading'
import { Text } from '../components/atoms/Text'

// eslint-disable-next-line react/display-name
export default ({ location, data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const meta = useSiteMetadata()
  const title = 'ブログ記事一覧'
  const baseTitle = meta.title

  return (
    <Base pathname={location.pathname}>
      {DynamicHelmet({ title, baseTitle })}

      <section>
        <Heading underline>ブログ記事一覧</Heading>

        {posts.length ? (
          posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => <ArticleLink post={post} key={post.id} />)
        ) : (
          <Text>記事が一つもありません。</Text>
        )}
      </section>
    </Base>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { fields: { slug: { articleType: { eq: "blog" } } } }
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
