import React from 'react';
import Home from './screen/Home';
import Location from './screen/Location';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
	return (
		<div className="App">
			<Router>
				<Route exact key="1" path="/" component={Home} />
				<Route key="2" path="/:id" component={Location} />
			</Router>
		</div>
	);
}

export default App;
