import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CommentApp from './CommentApp'

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


ReactDOM.render(
    <CommentApp />,
    document.getElementById('root')
)