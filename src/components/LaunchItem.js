import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
function LaunchItem({
	launch: { flight_number, mission_name, launch_date_local, launch_date },
}) {
	return (
		<Card>
			<Card.Content>
				<h3>Mission {mission_name} </h3>{' '}
			</Card.Content>
			<Card.Content>
				<Moment format='YYY-MM-DD HH:mm'>{launch_date_local}</Moment>
			</Card.Content>

			<Card.Content extra>
				<Link to={`/launch/${flight_number}`}>
					<Button>Launch details</Button>
				</Link>
			</Card.Content>
		</Card>
	);
}

export default LaunchItem;
