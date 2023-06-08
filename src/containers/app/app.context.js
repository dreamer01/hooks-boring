import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "/where", element: <Where /> },
	{ path: "/what", element: <What /> },
	{ path: "/which", element: <Which /> },
	{ path: "/letsgo", element: <Letsgo /> },
	{ path: "/about", element: <About /> },
]);

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
						<RouterProvider router={router} />
					</ActivityContext.Provider>
				</CategoryContext.Provider>
			</IndoorContext.Provider>
		</MultiplayerContext.Provider>
	);
}

export default App;
