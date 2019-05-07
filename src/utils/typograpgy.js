import Typography from "typography";

const customTypography = {
	baseFontSize: "16px",
	baseLineHeight: 1.5,
	bodyFontFamily: ["Quicksand", "Oxygen"],
	scaleRatio: 2.25,
	bodyWeight: 400,
	headerWeight: 500,
	googleFonts: [
		{
			name: "Bitter",
			styles: ["700"],
		},
		{
			name: "Quicksand",
			styles: ["400", "400i", "700", "700i"],
		},
	],

	overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
		body: {
			color: "#0D2C54",
			backgroundColor: "#FDF9F8",
			//color: "#fff",
		},
		p: {
			marginBottom: 0,
		},
		a: {
			color: "#94324A",
			textDecoration: "none",
		},
		h1: {
			fontFamily: ["Bitter", "Oxygen"].join(","),
			fontSize: scale(4 / 4),
			color: "#0D2C54",
			marginBottom: 0,
		},
		h2: {
			fontFamily: ["Bitter", "Oxygen"].join(","),
			fontSize: scale(3 / 4),
			color: "#0D2C54",
			marginBottom: 0,
		},
		h3: {
			fontFamily: ["Bitter", "Oxygen"].join(","),
			fontSize: scale(2 / 4),
			color: "#0D2C54",
			marginBottom: 0,
		},
		h4: {
			fontFamily: ["Bitter", "Oxygen"].join(","),
			fontSize: scale(1 / 6),
			color: "#0D2C54",
			marginBottom: 0,
		},
		h5: {
			fontFamily: ["Bitter", "Oxygen"].join(","),
			fontSize: scale(-1 / 6),
			color: "#0D2C54",
			marginBottom: 0,
		},
		h6: {
			fontFamily: ["Bitter", "Oxygen"].join(","),
			fontSize: scale(-2 / 6),
			color: "#0D2C54",
			marginBottom: 0,
		},
		blockquote: {
			...scale(1 / 4),
			borderLeft: `${rhythm(1 / 6)} solid #eceeef`,
			paddingTop: rhythm(1 / 3),
			paddingBottom: rhythm(1 / 3),
			paddingLeft: rhythm(2 / 3),
			paddingRight: rhythm(2 / 3),
		},
		"blockquote > :last-child": {
			marginBottom: 0,
		},
		"blockquote cite": {
			...adjustFontSizeTo(options.baseFontSize),
			color: "#efefef",
			fontWeight: options.bodyWeight,
			fontStyle: "normal",
		},
		img: {
			marginBottom: 0,
		},
	}),
};

const typography = new Typography(customTypography);

// Output CSS as string.
typography.toString();

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles();

export { typography };
