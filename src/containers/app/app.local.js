import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../home";
import Where from "../where";
import What from "../what";
import Which from "../which";
import Letsgo from "../letsgo";
import About from "../about";

function App() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/where" component={Where} />
			<Route exact path="/what" component={What} />
			<Route exact path="/which" component={Which} />
			<Route exact path="/letsgo" component={Letsgo} />
			<Route exact path="/about" component={About} />
		</Switch>
	);
}

export default App;
