import React, { useState } from 'react';

import { MenuItems } from '../data/menuItem';
import Button from './Button';
import { ReactComponent as Logosvg } from '../image/logo.svg';
import { Link } from 'react-router-dom';
const Header = () => {
	const [clicked, setClicked] = useState(false);
	function handleClick() {
		setClicked(!clicked);
	}
	return (
		<header className="header">
			<div className="header-logo">
				<Link to="/">
					<Logosvg />
				</Link>
			</div>
			<div className="menu-icon" onClick={handleClick}>
				<span style={{ fontSize: '40px' }}>
					<i width="25" height="25" className={clicked ? 'bi bi-x' : 'bi bi-three-dots-vertical'}></i>
				</span>
			</div>
			<ul className={clicked ? 'header-menu active' : 'header-menu'}>
				{MenuItems.map((item, index) => {
					return (
						<li key={index}>
							<a className={item.cName} href={item.url}>
								{item.title}
							</a>
						</li>
					);
				})}
				<Button>Sign Up</Button>
			</ul>
		</header>
	);
};

export default Header;
