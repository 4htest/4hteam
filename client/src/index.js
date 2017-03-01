import React from 'react';
import ReactDOM from 'react-dom';
// Router
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
 
// Container Components
import { AppContainer, MainContainer, DetailContainer, CategoryContainer } from './containers';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import thunk from 'redux-thunk';

const rootElement = document.getElementById('root');

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store = {store}>
	    <Router history={browserHistory}>
		    <Route path='/' component={AppContainer}>
		    	<IndexRoute component={MainContainer} />
		    	<Route path='main' component={MainContainer} />
		    	<Route path='detail' component={DetailContainer} />
		    	<Route path='/:categoryName' component={CategoryContainer} />
		    	<Route path='/:categoryName/:id' component={CategoryContainer} />
		    </Route>
		</Router>
	</Provider>, rootElement
);