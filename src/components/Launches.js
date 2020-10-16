import React from 'react';
import { Query, gql } from '@apollo/client';

const LAUNCHES_QUERY = gql`
query LaunchesQuery{
    launches{
        flight_number
        mission_name
        launch_date_local
        launch_success
    }}
    `;

const Launches = () => {
	return (
		<div>
            <h2>Launches</h2>
            <Query query={LAUNCHES_QUERY}>
            {
                ({loading, error, data})=> {
                    if(loading) return <h4>Loading...</h4>
                    if(error) console.log(error);
                    console.log(data)
                    return <h1>test</h1>

                }
            }
            </Query>
		</div>
	);
};



export default Launches
