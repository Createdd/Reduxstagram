import React from 'react';
import { render } from 'react-dom';

//import css
import css from './styles/style.styl';

//import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//import router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

//import sentry
import Raven from 'raven-js';
import {sentry_url, logException } from './data/config';

Raven.config(sentry_url, {
  tags: {
    git_commit: 'git tag',
    userLevel: 'editor'
  }
}).install();

// logException(new Error('download failed!'), {
//   email: 'danimail'
// })
Raven.captureMessage('Something went to shit');
Raven.showReportDialog();

console.log(window.adsfasdf);

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
