import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../assets/components/Header';
const Location = () => {
	const searchLocation = useSelector((state) => state.searchLocation);
	const { searchKeyword } = searchLocation;

	return (
		<div className="location">
			<Header />
			<h1>{searchKeyword}</h1>
		</div>
	);
};

export default Location;
