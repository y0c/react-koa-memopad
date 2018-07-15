import ReactDOM from 'react-dom';
import registerServiceWorker from 'registerServiceWorker';
import React from 'react';
import App from 'containers/App'

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

registerServiceWorker();
