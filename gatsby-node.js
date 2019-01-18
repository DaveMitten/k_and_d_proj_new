const path = require('path')

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    const recipePostTemplate = path.resolve('src/templates/RecipePost.js')
    resolve(
      graphql(`
        {
          allContentfulRecipe (limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulRecipe.edges.forEach((edge) => {
          createPage ({
            path: `recipes/${edge.node.slug}`,
            component: recipePostTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })
    )
  })
}