import React, { Component } from 'react' 
import { graphql } from 'gatsby'


// import styled from 'styled-components'



class LatestRecipes extends Component {
  render() {
    return (
		<div>
      <div style={{backgroundColor: `#D3D3D3`, width: `100%`, height: `200px`, marginBottom: `20px`}}>
		<div style= {{ backgroundColor: `#d5e700`, display: `inline`, fontWeight: `900`, margin: `20px`, fontSize: `24px`}}>
      LATEST RECIPES</div>
      <div>



        
      </div>
      </div>
		</div>
    )
  }
}

export default LatestRecipes

export const query = graphql`
# query will go here
`
