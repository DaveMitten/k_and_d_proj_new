// import React, { Component} from 'react';
// import PropTypes from 'prop-types';

// class RecipePost extends Component {
//   render() {
//     const {
//       title,
//       content
//     } = this.props.data.contentfulRecipe
//     return (
//       <div>
//         <h1>{title}</h1>
//       </div>
//     )
//   }
// }

// RecipePost.propTypes = {
//   data: PropTypes.object.isRequired
// }

// export default RecipePost

// export const pageQuery = graphql`
//   query RecipePostQuery($slug: String!){
//     contentfulRecipe(slug: {eq: $slug}) {
//       recipeTitle
//       slug
//       }
//     }
  
// `

//       // content {
//       //   childMarkdownRemark {
//       //     html
//       //   }

//               /* <div dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html}} /> */
