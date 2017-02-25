import React from 'react';
import ReactDOM from 'react-dom';
// Router
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
 
// Container Components
import { AppContainer, MainContainer, DetailContainer } from './containers';
import { ContextComponent } from './components';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import combineReducers from './reducers';
const rootElement = document.getElementById('root');
const store = createStore(combineReducers);

ReactDOM.render(
	<Provider store = {store}>
	    <Router history={browserHistory}>
		    <Route path='/' component={AppContainer}>
		    	<IndexRoute component={MainContainer} />
		    	<Route path='main' component={MainContainer} />
		    	<Route path='detail' component={DetailContainer} />
		    	<Route path='category' component={ContextComponent} />
		    </Route>
		</Router>
	</Provider>, rootElement
);