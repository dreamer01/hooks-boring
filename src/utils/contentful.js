var contentful = require("contentful");

const client = contentful.createClient({
	space: "xsej5tvgomz6",
	accessToken:
		"2585b2432776f2801240a4257fce8d9c9584975557ec8ae312bc5c1acc0593d6",
});

export default client;
