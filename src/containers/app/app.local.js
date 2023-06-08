import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import withTracker from "../../utils/withTracker";
import Home from "../home";
import Where from "../where";
import What from "../what";
import Which from "../which";
import Letsgo from "../letsgo";
import About from "../about";
import NotFound from "../../components/not-found";

const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "/where", element: <Where /> },
	{ path: "/what", element: <What /> },
	{ path: "/which", element: <Which /> },
	{ path: "/letsgo", element: <Letsgo /> },
	{ path: "/about", element: <About /> },
	{ path: "*", element: <NotFound /> },
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
