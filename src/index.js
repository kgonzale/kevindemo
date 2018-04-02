import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './pages/App';
import configureStore from './store/configureStore.js';

import { BrowserRouter} from 'react-router-dom';

import './assets/css/icons/fontawesome/styles.min.css';
import './assets/css/icons/icomoon/styles.css';
import './assets/css/bootstrap.css';
import './assets/css/core.css';
import './assets/css/components.css';
import './assets/css/colors.css';
import './assets/css/coalesce.css';


import './FixIE';
const store = configureStore();
//		<Router routes={routes} />

ReactDOM.render(
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
, document.getElementById('root'));