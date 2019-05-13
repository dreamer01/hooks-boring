import React from "react";
import { Switch, Route } from "react-router-dom";

import withTracker from "../../utils/withTracker";
import Home from "../home";
import Where from "../where";
import What from "../what";
import Which from "../which";
import Letsgo from "../letsgo";
import About from "../about";

function App() {
	return (
		<Switch>
			<Route exact path="/" component={withTracker(Home)} />
			<Route exact path="/where" component={withTracker(Where)} />
			<Route exact path="/what" component={withTracker(What)} />
			<Route exact path="/which" component={withTracker(Which)} />
			<Route exact path="/letsgo" component={withTracker(Letsgo)} />
			<Route exact path="/about" component={withTracker(About)} />
		</Switch>
	);
}

export default App;
