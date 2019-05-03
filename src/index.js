import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { TypographyStyle, GoogleFont } from "react-typography";

import { typography } from "./utils/typograpgy";
import App from "./containers/app";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<BrowserRouter>
		<TypographyStyle typography={typography} />
		<GoogleFont typography={typography} />
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);
serviceWorker.unregister();
