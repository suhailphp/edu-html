/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import AuthPage from 'containers/AuthPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

import "../../assets/css/pages/login/login-1.css";
import "../../assets/css/style.bundle.css";



import "../../assets/css/themes/layout/header/base/light.css";
import "../../assets/css/themes/layout/header/menu/light.css";
import "../../assets/css/themes/layout/brand/dark.css";
import "../../assets/css/themes/layout/aside/dark.css";



export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/auth/*" component={AuthPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
