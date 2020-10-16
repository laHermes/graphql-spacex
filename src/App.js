import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Launches from './components/Launches'
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});
function App() {
	return (
		<ApolloProvider client={client}>
			<div className='App'>SpaceX</div>
      <Launches/>
		</ApolloProvider>
	);
}

export default App;
