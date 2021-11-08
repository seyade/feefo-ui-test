import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import GlobalStyle from './styles';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
