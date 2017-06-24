import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { getData } from 'actions/app';

const propTypes = {
};

class Forests extends Component {

	render() {
		return (
			<div className={'page'}>
				<Helmet>
					<title>Forests</title>
				</Helmet>

				<h1>Forests</h1>
				<img width={'150px'} src={'images/forest.jpg'} alt={'forests'} />
				<div>{JSON.stringify(this.props.appData)}</div>
			</div>
		);
	}
}

Forests.propTypes = propTypes;
export default Forests;
