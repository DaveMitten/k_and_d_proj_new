import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby-link'

// import layout from '../layouts/layout';
// import Layout from '../layouts/RecipeLayout';


const BlogPost = ({node}) => {
  return (
    <li>
      {/* <img src={node.featureImage.responsiveResolution.src}/> */}
      <Link to={node.slug}><h3>{node.title}</h3></Link>
      {/* <div>{node.content.childMarkdownRemark.excerpt}</div> */}
    </li>
  )
}
const IndexPage = ({data}) => (
  <ul className='blog-post'>
    {data.all.edges.map((edge) => <BlogPost node={edge.node} />)}
  </ul>
)

export default IndexPage

export const pageQuery = graphql`
   query pageQuery {
    allContentfulRecipe (
    filter: {
      node_locale: {eq: "en-US"}
    },
    sort:{ fields: [dateAndTime], order: DESC }
    ) {
        edges {
          node {
						recipeTitle
						id
            slug
            recipeMain 
          }
        }
    }}
   
`

// childMarkdownRemark {
// 	excerpt
// }

// {
// 	responsiveResolution(width: 300, height: 300) {
// 		src
// 	}
// }

// mainImage
































// export default ({ data }) => {
// 	return (
// 	<Layout>
// 	{console.log(data)}
// 	  <h3>{data.contentfulRecipe.recipeTitle} </h3>

//     <div><img src='{data.contentfulRecipe.mainImage.file.url}' alt=""/></div>

//   </Layout>
// )}

// export const query = graphql`
//   query
//     contentfulRecipe {
//       recipeTitle
//       mainImage {
//         file {
//           url
//           fileName
//           contentType
//         }
//       }
//     }
//   }
// `;

// const RecipeMain = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         contentfulRecipe {
//           recipeTitle
//         }
//       }
//     `}
//     render={data => (
//       <layout>
//         <h1>{data.contentfulRecipe.recipeTitle}</h1>
//       </layout>
//     )}
//   />
// );
