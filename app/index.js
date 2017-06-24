/* global Raven */

import React from 'react';
import { Provider } from 'react-redux';
import { renderToStaticMarkup } from 'react-dom/server';
import { BrowserRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router';
import { Helmet } from "react-helmet";

import App from 'components/App/App';
// import ManageScroll from 'components/ManageScroll/ManageScroll';
import store from './store';

// Raven.config(<Raven-URI>).install();
// require('./manageServiceWorker');

const Root = () => (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

const staticRoot = function(locals) {
	const app = renderToStaticMarkup(
		<Provider store={store}>
			<StaticRouter location={locals.path}>
				<App />
			</StaticRouter>
		</Provider>
	);
	const helmet = Helmet.renderStatic();
	const regexp = / data-react-helmet="true"/g;
	return `<html>
	<head>
		<link href="/main.css" rel="stylesheet" />
		${helmet.title.toString().replace(regexp, '')}
        ${helmet.meta.toString().replace(regexp, '')}
        ${helmet.link.toString().replace(regexp, '')}
	</head>
	<body>
		${app}
	</body>
</html>
	`;
};

const output = module.hot ? Root : staticRoot;

export default output;

// if (!module.hot) render(<Root />, document.querySelector('react'));
