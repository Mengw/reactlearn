// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import CommentApp from './comment/CommentApp'

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


// ReactDOM.render(
//     <CommentApp />,
//     document.getElementById('root')
// )

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CommentApp from './comment3/containers/CommentApp'
import commentsReducer from './comment3/reducers/comments'
import './index.css'

const store = createStore(commentsReducer)

ReactDOM.render(
    <Provider store={store}>
        <CommentApp />
    </Provider>,
    document.getElementById('root')
);