import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import "./styles.css";
import Home from "../home";
import Where from "../where";
import What from "../what";
import Which from "../which";

export const MultiplayerContext = React.createContext();
export const IndoorContext = React.createContext();
export const CategoryContext = React.createContext();

function App() {
	const [multiplayer, setMultiplayer] = useState(false);
	const [indoor, setIndoor] = useState(true);
	const [category, setCategory] = useState("");

	return (
		<MultiplayerContext.Provider value={[multiplayer, setMultiplayer]}>
			<IndoorContext.Provider value={[indoor, setIndoor]}>
				<CategoryContext.Provider value={[category, setCategory]}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/where" component={Where} />
						<Route exact path="/what" component={What} />
						<Route exact path="/which" component={Which} />
					</Switch>
				</CategoryContext.Provider>
			</IndoorContext.Provider>
		</MultiplayerContext.Provider>
	);
}

export default App;
