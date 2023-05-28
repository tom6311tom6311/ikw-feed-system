import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import AppConfig from './const/AppConfig';
import Login from './containers/LoginPage/LoginPage';
import MainPage from './containers/MainPage/MainPage';
import SiteListPage from './containers/SiteListPage/SiteListPage';
import SitePage from './containers/SitePage/SitePage';
import PoolPage from './containers/PoolPage/PoolPage';
import PoolMemoPage from './containers/PoolMemoPage/PoolMemoPage';

const httpLink = createHttpLink({
  uri: AppConfig.BACKEND.GQL_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('x-token') || '';
  return {
    headers: {
      ...headers,
      'x-token': token,
    },
  };
});

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ extensions }) => {
      if (extensions?.code === 401) {
        window.location.replace('/login');
      }
    });
  }
});

const client = new ApolloClient({
  link: authLink.concat(errorLink).concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<MainPage />}>
            <Route path="site/:siteId/pool/:poolId/memo">
              <Route path="*" element={<PoolMemoPage />} />
              <Route index element={<PoolMemoPage />} />
            </Route>
            <Route path="site/:siteId/pool/:poolId">
              <Route path="*" element={<PoolPage />} />
              <Route index element={<PoolPage />} />
            </Route>
            <Route path="site/:siteId">
              <Route path="*" element={<SitePage />} />
              <Route index element={<SitePage />} />
            </Route>
            <Route path="*" element={<SiteListPage />} />
            <Route index element={<SiteListPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
