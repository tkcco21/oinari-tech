const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    const [articleType] = fileNode.relativeDirectory.split('/')
    const title = node.frontmatter.path

    createNodeField({
      node,
      name: 'slug',
      value: { slugPath: `/${articleType}${title}`, articleType },
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.jsx`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
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
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug.slugPath,
      component: blogPostTemplate,
      context: {
        slugPath: node.fields.slug.slugPath,
        articleType: node.fields.slug.articleType,
      }, // additional data can be passed via context
    })
  })
}
