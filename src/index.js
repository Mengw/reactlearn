import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rederContent from './learnreact/learn'
import Notification from './learnreact/learn1'
import Index from './learnreact/learn2'
import {Title, Title2, Title3,Dog} from './learnreact/learn3';

import {Index161, Index162} from './learnreact/learn6'

import {PercentageApp} from './learnreact2/learn1'
import {AutoFocusInput,Post} from './learnreact2/learn2-4'

import {Card} from './learnreact2/learn2-5'
import {Editor, Editor1} from './learnreact2/learn2-6'


import {Index31} from './learnreact3/react-context'

import {App1} from './learnrouter/index'
import { HashRouter } from 'react-router-dom'

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
    <Index161 />,
    document.getElementById('root')
)

ReactDOM.render(
    <Index162 />,
    document.getElementById('root')
)

// 2-1
ReactDOM.render(
    <PercentageApp />,
    document.getElementById('root')
)


// 2-4
ReactDOM.render(
    <AutoFocusInput />,
    document.getElementById('root')
)


ReactDOM.render(
    <Post content="hahaha"/>,
    document.getElementById('root')
)


// 2-5
ReactDOM.render(
    <Card content={
        <div>
            <h2>React.js hahaha</h2>
            <div>开源、免费、专业、简单</div>
            订阅：<input />
        </div>
    } />,
    document.getElementById('root')
)

// 2-6
ReactDOM.render(
    <Editor />,
    document.getElementById('root')
)

ReactDOM.render(
    <Editor1 />,
    document.getElementById('root')
)

// 3-1
ReactDOM.render(
    <Index31 />,
    document.getElementById('root')
)


// learn router, 这个地方有这个错误 Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.
//
// const App = () => {
//<Provider store={store}>
  //  <MyApp/>
  //  </Provider>
//}
//Arrow function above return null. If you're using curly brackets, you should add return keyword. Try add a return keyword first.
// Compare this code below.

//const add = (a, b) => a + b;
//const anotherAdd = (a, b) => { return a + b; };
//That code equal. The difference is that the first one doesn't need return keyword since it is not using curly brackets.
//
//
//
ReactDOM.render(
    (
    <HashRouter>
        <App1 />
    </HashRouter>
),
    document.getElementById('root'))
