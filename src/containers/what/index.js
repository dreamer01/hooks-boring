import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Layout from "../../components/layout";
import UpArrow from "../../assets/icons/up-arrow.svg";
import DownArrow from "../../assets/icons/down-arrow.svg";

const Conatiner = styled.div`
	flex: 1;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-around;
`;

const Icon = styled.img`
	height: ${props => (props.size === "small" ? "25px" : "25px")};
`;

const Category = styled.div``;

export default ({ data }) => {
	let [categories, setCategories] = useState([]);

	return (
		<Layout>
			<Link to="/where">
				<Icon src={UpArrow} />
			</Link>
			<Conatiner>
				{categories &&
					categories.map(category => (
						<Link key={category.id} to="/which">
							<Category
								src={category.featureImg.fluid.src}
								title={category.title}
							/>
						</Link>
					))}
			</Conatiner>
			<Icon src={DownArrow} />
		</Layout>
	);
};
