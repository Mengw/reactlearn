import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rederContent from './learnreact/learn'
import Notification from './learnreact/learn1'
import Index from './learnreact/learn2'
import {Title, Title2, Title3,Dog} from './learnreact/learn3';

import {Index6, Index66} from './learnreact/learn6'

import {PercentageApp} from './learnreact2/learn1'

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

// learn6
ReactDOM.render(
    <Index6 />,
    document.getElementById('root')
)

ReactDOM.render(
    <Index66 />,
    document.getElementById('root')
)

// 2-1
ReactDOM.render(
    <PercentageApp />,
    document.getElementById('root')
)

