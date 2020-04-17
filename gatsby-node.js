const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require('lodash')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages',
      trailingSlash: false,
    })
    createNodeField({
      node,
      name: 'slug',
      value: `/blog${slug}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
          edges {
            node {
              frontmatter {
                tags
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
        const posts = result.data.allMarkdownRemark.edges;
        posts.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/post.js`),
            context: {
              slug: node.fields.slug,
            },
          })
        })

        let tags = []
        _.each(posts, edge => {
          if (_.get(edge, 'node.frontmatter.tags')) {
            tags = tags.concat(edge.node.frontmatter.tags)
          }
        })

        tags = _.uniq(tags)
        tags.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}`,
            component: path.resolve(`src/templates/tags.js`),
            context: {
              tag,
            },
          })
        })
      })
    resolve()
  })
}
