import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import { Logo } from "../../utils/images";

function SEO({ description, lang, meta, title, image }) {
	const metaDescription = description || "What2Do when you are feeling bored.";
	const metaImage = image ? image : Logo;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			image={image}
			title={title}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					property: `og:image`,
					content: metaImage,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: "@stud2design",
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:image`,
					content: metaImage,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			].concat(meta)}
		/>
	);
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	title: "Stud2Design",
	description: ``,
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
};

export default SEO;
