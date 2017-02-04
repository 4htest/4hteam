import React from 'react';
import ReactDOM from 'react-dom';
// Router
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
 
// Container Components
import { Main, DetailContainer, Test } from './containers';

// Redux
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import reducers from 'reducers';
// import thunk from 'redux-thunk';
import withBasename from './config';
const rootElement = document.getElementById('root');
// const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Router history={browserHistory}>
	    <Route path='/' component={Main}>
	    	<IndexRoute component={Test} />
	    	<Route path='detail' component={DetailContainer} />
	    </Route>
	</Router>, rootElement
);