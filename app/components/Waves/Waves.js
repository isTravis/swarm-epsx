import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const propTypes = {
};

class Waves extends Component {

	render() {
		console.log('in waves');
		return (
			<div className={'page'}>
				<Helmet>
					<title>Wavess</title>
				</Helmet>

				<h1>Waves</h1>
				<img width={'150px'} src={'/images/waves.png'} alt={'Waves'} />
			</div>
		);
	}
}

Waves.propTypes = propTypes;
export default Waves;
