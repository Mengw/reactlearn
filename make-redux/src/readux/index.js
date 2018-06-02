/**
 * Created by Administrator on 2018/6/2.
 */

import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import Content from './content'
import './index.css'


function createStore(reducer) {
    let state = null;
    const listeners = [];
    const subscribe = (listener) => listeners.push(listener);
    const getState = () => state;
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => listener() );
    }

    dispatch({})

    return { getState, dispatch, subscribe}
}

const themeReducer = (state, action) => {
    if(!state) return {
        themeColor : 'red'
    }

    switch (action.type){
        case 'CHANGE_COLOR':
            return { ...state, themeColor: action.themeColor }
        default:
            return state
    }
}

const store = createStore(themeReducer)


class Index extends Component{
    static childContextTypes = {
        store: PropTypes.object
    }

    getChildContext () {
        return { store }
    }

    render () {
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}


export class Provider extends Component{

    static proTypes = {
        store : proTypes.object,
        children: PropTypes.any
    }

    static childContextTypes = {
        store: PropTypes.object
    }

    getChildContext () {
        return {
            store: this.props.store
        }
    }

    render () {
        return (
            <div>{this.props.children}</div>
        )
    }



}

class Index extends Component {
    render () {
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store = {store}>

        <Index />
    </Provider>,
    document.getElementById('root')
);





