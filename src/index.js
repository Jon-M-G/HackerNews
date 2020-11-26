import gatsby from 'gatsby';
import React from 'react';
import {render} from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
//import * as serviceWorker from './serviceWorker';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//serviceWorker.register();
reportWebVitals();
