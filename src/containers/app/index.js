import React from "react";
import { Switch, Route } from "react-router-dom";

import "./styles.css";
import Home from "../home";
import Where from "../where";
import What from "../what";
import Which from "../home";

function App() {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/where" component={Where} />
				<Route exact path="/what" component={What} />
				<Route exact path="/which" component={Which} />
			</Switch>
		</>
	);
}

export default App;
