import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';
import LaunchItem from './LaunchItem';
const LAUNCHES_QUERY = gql`
	query LaunchesQuery {
		launches {
			flight_number
			mission_name
			launch_date_local
			launch_success
		}
	}
`;

function Launches() {
	const { loading, error, data } = useQuery(LAUNCHES_QUERY);
	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;
	return (
		<Fragment>
			{data.launches.map((launch) => {
				return <LaunchItem key={launch.flight_number} launch={launch} />;
			})}
		</Fragment>
	);
}

export default Launches;
