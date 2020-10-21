import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const LAUNCH_QUERY = gql`
	query LaunchQuery($flight_number: Int!) {
		launch(flight_number: $flight_number) {
			flight_number
			mission_name
			launch_year
			launch_success
			launch_date_local
			rocket {
				rocket_id
				rocket_name
				rocket_type
			}
		}
	}
`;

function Launch(props) {
	//get flight number from props
	let { flight_number } = props.match.params;
	flight_number = parseInt(flight_number);
	//load data from query
	let { loading, error, data } = useQuery(LAUNCH_QUERY, {
		variables: { flight_number },
	});

	if (loading) return 'loading...';
	if (error) console.log(error);

	const {
		mission_name,
		launch_year,
		launch_success,
		rocket: { rocker_id, rocket_name, roket_type },
	} = data.launch;

	return (
		<Fragment>
			<h2>Mission: {mission_name}</h2>
			<h2>LaunchYear: {launch_year}</h2>
			<h2>Flight Number: {flight_number}</h2>
		</Fragment>
	);
}

export default Launch;
