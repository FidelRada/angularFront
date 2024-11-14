
// apollo.config.ts
import { provideApollo, APOLLO_NAMED_OPTIONS } from 'apollo-angular';
import { InMemoryCache, HttpLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';

const basicAuth = `Basic ${btoa('admin:admin123')}`;

const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      Authorization: basicAuth,
    },
  }));

export const apolloProviders = [
  provideApollo(() => ({
    cache: new InMemoryCache(),
    link: authLink.concat(new HttpLink({ uri: 'http://localhost:8080/graphql' })),
  })),
  {
    provide: APOLLO_NAMED_OPTIONS,
    useValue: {
      api1: {
        cache: new InMemoryCache(),
        link: authLink.concat(new HttpLink({ uri: 'http://localhost:8080/graphql' })),
      },
      api2: {
        cache: new InMemoryCache(),
        link: new HttpLink({ uri: 'https://inmuebleanalize-production.up.railway.app/graphql/' }),
      },
    },
  },
];