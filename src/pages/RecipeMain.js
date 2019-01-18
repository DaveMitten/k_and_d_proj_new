import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/RecipeLayout"


export default ({ data }) => {
	return (
	<Layout>
	{console.log(data)}
	  <h1>About {data.allContentfulRecipe}</h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </Layout>
)}


export const query = graphql`
query{
	allContentfulRecipe {
	  edges {
		node {
		  id
		}
	  }
	}
   }
`
