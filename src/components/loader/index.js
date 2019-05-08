import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	transform: translate(-50%, -50%);
	width: 50px;
	height: 10px;
	background: #3498db;
	border-radius: 5px;
	animation: load 2s ease-in-out infinite;
	&:before,
	&:after {
		position: absolute;
		display: block;
		content: "";
		animation: load 2s ease-in-out infinite;
		height: 10px;
		border-radius: 5px;
	}
	&:before {
		top: -20px;
		left: 10px;
		width: 40px;
		background: #f46c70;
	}
	&:after {
		bottom: -20px;
		width: 35px;
		background: #3768fa;
	}

	@keyframes load {
		0% {
			transform: translateX(40px);
		}

		50% {
			transform: translateX(-30px);
		}
		100% {
			transform: translateX(40px);
		}
	}
`;

export default function Loader() {
	return <Wrapper className="loader" />;
}
