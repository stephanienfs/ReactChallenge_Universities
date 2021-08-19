import React, { createContext } from 'react';

import { Provider } from 'react-redux';

import store from './data/store';

import { HashRouter, Switch, Route } from 'react-router-dom';

import Menu from './components/Menu';

import Universities from './pages/Universities';
import Books from './pages/Books';
import NotFound from './pages/NotFound';

import { GlobalStyle } from './components/ui/Button';

import BackgroundColorContext from './contexts/BackgroundColorContext';

function App() { 

  const color = 'blue';

  return <>      
      <Provider store={store}>
        <BackgroundColorContext.Provider value={{ backgroundColor: color }}>
          <GlobalStyle />   
          <HashRouter>
            <Menu />
            <Switch>
              <Route path="/" exact={true} component={Universities} />
              <Route path="/books" component={Books} />
              <Route path="/" component={NotFound} />
            </Switch>
          </HashRouter>
        </BackgroundColorContext.Provider> 
      </Provider>
    </>;
}

export default App;
