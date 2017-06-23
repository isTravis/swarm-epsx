import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = function() {
	const toggleSlide = function() {
		const elem = document.getElementsByClassName('nav-menu')[0];
		if (elem.className === 'nav-menu') {
			elem.className = 'nav-menu open';
		} else {
			elem.className = 'nav-menu';
		}
	};

	return (
		<nav className="navbar-page">
			<div className={'navbar'}>
				<Link to={'/'}>React Starter 17</Link>
				<a role={'button'} tabIndex={0} className={'right'} onClick={toggleSlide}>Menu</a>

				<div role={'presentation'} className={'nav-menu'} onClick={toggleSlide}>
					<div className={'content'}>
						<ul>
							<li>Item 1</li>
							<li>Item 2</li>
							<li>Item 3</li>
							<li>Item 4</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
