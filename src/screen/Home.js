import React, { useState } from 'react';
import Header from '../assets/components/Header';
import Button from '../assets/components/Button';
import { ReactComponent as Mainsvg } from '../assets/image/main.svg';
import { ReactComponent as Searchsvg } from '../assets/image/icons8-search.svg';
import { useDispatch } from 'react-redux';
import { addSearch } from '../redux/action/searchLocationAction';
const Home = ({ history }) => {
	const dispatch = useDispatch();
	const [location, setLocation] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(addSearch(location));
		history.push(`/${location}`);
	};
	return (
		<div className="home">
			<Header />
			<div className="hero-container">
				<div className="hero-heading">
					<h1>
						Find Your <span>Dream House</span>
					</h1>
				</div>
				<form onClick={submitHandler}>
					<div className="hero-search">
						<div className="hero-search__input">
							<Searchsvg />

							<input type="text" placeholder="Search for location" value={location} onChange={(e) => setLocation(e.target.value)} />
						</div>
						<div className="hero-search__button">
							<Button onClick={submitHandler}>Search</Button>
						</div>
					</div>
				</form>
			</div>
			<div className="home-background">
				<Mainsvg />
			</div>
		</div>
	);
};

export default Home;
