import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
