import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FrontDoor from './FrontDoor';
import App from './App';

const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={FrontDoor}/>
				<Route path='/user/:username' component={App}/>
			</Switch>
		</BrowserRouter>
	)
};

export default Router;
