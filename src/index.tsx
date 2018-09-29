import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './Components/App/App';
import './index.css';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

// store 
import {store} from './Store/appStore'

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
