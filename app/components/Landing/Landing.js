import React from 'react';
import { Link } from 'react-router-dom';

const Landing = function() {
	console.log('In Landing');
	return (
		<div id={'landing-page'}>
			<style>{`h1.funky { color: ${'red'}; }`}</style>
			<h1 className={'funky'}>Some other Content!</h1>
			<Link to={'/waves'}>
				<div className={'card'}>
					<span className={'title'}>Tidal Waves!</span>
					<img src={'/images/waves.png'} alt={'waves'} />
				</div>
			</Link>

			<Link to={'/forests'}>
				<div className={'card'}>
					<span className={'title'}>Forests</span>
					<img src={'/images/forest.jpg'} alt={'forests'} />
				</div>
			</Link>
		</div>
	);
};

export default Landing;
