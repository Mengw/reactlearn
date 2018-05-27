import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rederContent from './learnreact/learn'
import Notification from './learnreact/learn1'
import Index from './learnreact/learn2'
import {Title, Title2, Title3,Dog} from './learnreact/learn3';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// learn
rederContent('learn');

// learn1
ReactDOM.render(
    <Notification />,
    document.getElementById('root')
)

// learn2
ReactDOM.render(
    <Index />,
    document.getElementById('root')
)


// learn3
ReactDOM.render(
    <Dog />,
    document.getElementById('root')
)

