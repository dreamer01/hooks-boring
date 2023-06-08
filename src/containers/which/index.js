import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLazyQuery, gql } from "@apollo/client";

import useLocalStorage from "../../hooks/useLocalStorage";
import {
	Layout,
	Category as Activity,
	Loader,
	Carousel,
	SEO,
} from "../../components";

const GET_ACTIVITIES = gql`
	query getActivities($multiplayer: Boolean!) {
		activityCollection(where: { multiplayer: $multiplayer }) {
			items {
				sys {
					id
				}
				title
				category {
					sys {
						id
					}
				}
				featureImgCollection {
					items {
						url
					}
				}
			}
		}
	}
`;

const GET_ALL_ACTIVITIES = gql`
	query {
		activityCollection {
			items {
				sys {
					id
				}
				title
				category {
					sys {
						id
					}
				}
				featureImgCollection {
					items {
						url
					}
				}
			}
		}
	}
`;

const Content = styled.div`
	display: flex;
	flex: 1;
	width: 100%;
	justify-content: center;
	align-items: center;
`;

export default function Which() {
	const [loading, setLoading] = useState(true);
	const [activities, setActivities] = useState(null);
	const [, setActivity] = useLocalStorage("activity", "");
	const [multiplayer] = useLocalStorage("multiplayer", false);
	const [category] = useLocalStorage("category", null);

	const renderActivities = (activity) => (
		<Link
			onClick={() => setActivity(activity)}
			key={activity.sys.id}
			to="/letsgo"
		>
			<Activity
				src={activity.featureImgCollection.items[0].url}
				title={activity.title}
				isCategory={false}
			/>
		</Link>
	);

	const [fetchActivities, { data }] = useLazyQuery(GET_ACTIVITIES);
	const [fetchAllActivities, { data: allData }] =
		useLazyQuery(GET_ALL_ACTIVITIES);

	useEffect(() => {
		if (multiplayer) fetchAllActivities();
		else fetchActivities({ variables: { multiplayer } });
	}, [fetchActivities, fetchAllActivities, multiplayer]);

	useEffect(() => {
		const categoryId = category && category.sys.id;
		if (data) {
			const activitiesList = data.activityCollection.items.filter(
				(a) => a.category.sys.id === categoryId
			);
			setActivities(activitiesList);
		}
		if (allData) {
			const activitiesList = allData.activityCollection.items.filter(
				(a) => a.category.sys.id === categoryId
			);
			setActivities(activitiesList);
		}
	}, [category, data, allData]);

	useEffect(() => {
		if (activities) setLoading(false);
	}, [activities]);

	return (
		<Layout>
			<SEO
				title={category ? category.title : "Category"}
				description="What you will start with now that we are here ?"
				image={category && category.featureImg.url}
			/>
			<Content>
				{loading ? (
					<Loader />
				) : (
					<Carousel>{activities.map(renderActivities)}</Carousel>
				)}
			</Content>
		</Layout>
	);
}
