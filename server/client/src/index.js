import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider, InMemoryCache } from '@apollo/client'
import Routes from './Routes';




ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

