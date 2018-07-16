import ReactDOM from 'react-dom';
import registerServiceWorker from 'registerServiceWorker';
import React from 'react';
import Root from 'containers/Root'

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
);

registerServiceWorker();
