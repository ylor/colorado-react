import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from "./components/Header"
import Routine from "./components/Routine"
import Exercises from "./components/Exercises"
import Rules from "./components/Rules"
import Footer from "./components/Footer"
import About from "./components/About"
import NotFound from "./components/NotFound"

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/" component={Routine} />
				<Route path="/exercises" component={Exercises} />
				<Route path="/rules" component={Rules} />
				<Route path="/about" component={About} />
				<Route component={NotFound} />
			</Switch>
			<Footer />
		</Router>
	)
}

export default App
