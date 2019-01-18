import React from "react"
import Header from '../components/header'


export default ({ children }) =>
 	<div className="app-wrapper">
	 <Header />
	 {children}
	 
	 </div>


