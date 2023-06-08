import React from "react";
import * as ReactDOM from "react-dom/client";

import { TypographyStyle, GoogleFont } from "react-typography";
import {
	ApolloClient,
	InMemoryCache,
	createHttpLink,
	ApolloProvider,
} from "@apollo/client";

import { typography } from "./utils/typograpgy";
import App from "./containers/app/app.local";
import * as serviceWorker from "./serviceWorker";

const httpLink = createHttpLink({
	uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE}`,
	headers: {
		Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_TOKEN}`,
	},
});

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<div>
		<TypographyStyle typography={typography} />
		<GoogleFont typography={typography} />
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</div>
);

// serviceWorker.unregister();
serviceWorker.register();
