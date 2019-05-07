import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../home";
import Where from "../where";
import What from "../what";
import Which from "../which";
import Letsgo from "../letsgo";
import About from "../about";

export const MultiplayerContext = React.createContext();
export const IndoorContext = React.createContext();
export const CategoryContext = React.createContext();
export const ActivityContext = React.createContext();

function App() {
	const [multiplayer, setMultiplayer] = useState(false);
	const [indoor, setIndoor] = useState(true);
	const [category, setCategory] = useState({});
	const [activity, setActivity] = useState("");

	return (
		<MultiplayerContext.Provider value={[multiplayer, setMultiplayer]}>
			<IndoorContext.Provider value={[indoor, setIndoor]}>
				<CategoryContext.Provider value={[category, setCategory]}>
					<ActivityContext.Provider value={[activity, setActivity]}>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/where" component={Where} />
							<Route exact path="/what" component={What} />
							<Route exact path="/which" component={Which} />
							<Route exact path="/letsgo" component={Letsgo} />
							<Route exact path="/about" component={About} />
						</Switch>
					</ActivityContext.Provider>
				</CategoryContext.Provider>
			</IndoorContext.Provider>
		</MultiplayerContext.Provider>
	);
}

export default App;
