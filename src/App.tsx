import React from 'react';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import CreateGlobalStyle from './styles/global';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import AppProvider from './contexts';
import defaultTheme from './styles/theme';

const client = new GraphQLClient({
  url: 'https://api.code-challenge.ze.delivery/public/graphql',
});

const App: React.FC = () => (
  <Router>
    <ClientContext.Provider value={client}>
      <ThemeProvider theme={defaultTheme}>
        <AppProvider>
          <CreateGlobalStyle />
          <Routes />
        </AppProvider>
      </ThemeProvider>
    </ClientContext.Provider>
    <Footer />
  </Router>
);

export default App;
