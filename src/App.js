import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Launches from './components/Launches';
import Launch from './components/Launch';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql',
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<div className='App'>SpaceX</div>
				<Route exact path='/' component={Launches} />
				<Route path='/launch/:flight_number' component={Launch} />
			</Router>
		</ApolloProvider>
	);
}

export default App;
