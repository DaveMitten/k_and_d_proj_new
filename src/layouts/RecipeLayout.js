import React from "react"
import Header from '../components/header'


export default ({ children }) =>
 <div className="app-wrapper">
	 <Header />
	 <h1>Recipes</h1>
	 {children}

	 </div>