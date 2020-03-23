import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Row } from "../containers/letsgo";
import { UpArrow, CoronaSvg } from "../utils/images";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Img = styled.img`
	height: 200px;
	margin-top: 20px;
	@media (max-width: 400px) {
		height: 150px;
	}
`;

const Icon = styled.img`
	height: 15px;
	margin-right: 5px;
	transform: rotate(-90deg);
	cursor: pointer;
	@media (max-width: 500px) {
		height: 10px;
	}
`;

const Text = styled.div`
	margin-bottom: 50px;
`;

function CoronaWarning() {
	return (
		<Wrapper>
			<Img src={CoronaSvg} alt="Corona Stay Home" />
			<Text>
				<br />
				<br />
				- Self-isolate and stay at home for seven days if you develop symptoms:
				a new continuous cough and/or high temperature. A high temperature means
				you feel hot to touch on your chest or back; a new, continuous cough
				means coughing a lot for more than an hour or three or more coughing
				episodes in 24 hours.
				<br />
				<br />
				- Stay at home for 14 days if you live in a household where someone has
				the symptoms of coronavirus. This longer period is because it can take
				14 days for symptoms to appear and you will not know initially whether
				or not you are infected. If you then develop symptoms, stay at home for
				a further seven days even if that means you stay at home in total for
				longer than 14 days of isolation.
				<br />
				<br />- Wash your hands frequently with soap and water for at least 20
				seconds and particularly before you touch food or if you have been out
				in public areas, have been coughing, sneezing or blowing your nose.
				<br />
				<br />- Always cough and sneeze into a tissue, then throw it away and
				wash your hands. Use your arm if you don’t have a tissue to hand.
				<br />
				<br />- If you develop symptoms and live with someone who is vulnerable
				– over 70, who has a long-term health condition, is pregnant or has a
				weakened immune system – arrange for them to stay with friends and
				family for 14 days. If that is not possible, keep two or three metres
				away from them, do not share a bathroom and do not use shared spaces (ie
				kitchens) at the same time.
				<br />
				<br />- Clean commonly used surfaces at home such as door handles,
				kettles and phones.
				<br />
				<br />- Drink plenty of liquids to stay well hydrated.
				<br />
				<br />- Take paracetamol to ease any symptoms. There is no strong
				evidence that ibuprofen can worsen symptoms, so if you are already
				taking ibuprofen or another anti-inflammatory, then do not stop taking
				it without consulting a doctor.
				<br />
				<br />- Work from home where possible. Keep in touch with friends and
				family using remote technology: ie phone, internet and social media.
				Take light exercise to keep fit.
				<br />
				<br />- Respect the need for social distancing: if you go out, stay at
				least two metres away from others to prevent transmission of the virus.
				Avoid non-essential use of public transport where possible. Stay away
				from gatherings in public spaces. Cinemas, theatres, pubs, bars,
				restaurants and clubs are now all required to close.
				<br />
				<br />- Ask family, friends and neighbours to support you if you are
				reducing social contact and need help obtaining food and medicine. Use
				online services.
				<br />
				<br />
				<a href="https://www.theguardian.com/world/2020/mar/22/coronavirus-dos-and-donts-uk-advice-behaving-responsibly">
					Source
				</a>
			</Text>

			<Link to="/where">
				<Row className="round">
					<Icon size="small" src={UpArrow} alt="Open Link" />
					<h3 style={{ marginLeft: 10 }}>Ok, I will stay home</h3>
				</Row>
			</Link>
		</Wrapper>
	);
}

export default CoronaWarning;
