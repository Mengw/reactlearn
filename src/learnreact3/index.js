/**
 * Created by Administrator on 2018/6/2.
 */

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Header from './containers/Header'
import Content from './containers/Content'
import './index.css'


const themeReducer = (state, action) => {
    if(!state)
        return {
        themeColor : 'red'
        }

    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, themeColor: action.themeColor }
        default:
            return state
    }
}

const store = createStore(themeReducer)