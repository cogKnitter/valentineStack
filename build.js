import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Projects from './modules/Projects'



render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/projects" component={Projects}/>
    </Route>
  </Router>
), document.getElementById('app'))
