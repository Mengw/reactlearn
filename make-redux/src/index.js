// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// const appState = {
//     title :{
//         text: 'React.js 小书',
//         color: 'red',
//     },
//     content :{
//         text: 'React.js 小书内容',
//         color: 'blue'
//     }
// }
//
//
// function renderApp (appState) {
//     renderTitle(appState.title)
//     renderContent(appState.content)
// }
//
// function renderTitle (title) {
//     const titleDOM = document.getElementById('title')
//     titleDOM.innerHTML = title.text
//     titleDOM.style.color = title.color
// }
//
// function renderContent (content) {
//     const contentDOM = document.getElementById('content')
//     contentDOM.innerHTML = content.text
//     contentDOM.style.color = content.color
// }
//
//
// renderApp(appState);
//
//
// // 所有对数据的操作必须通过 dispatch 函数
// function dispatch(action){
//     switch (action.type) {
//         case 'UPDATE_TITLE_TEXT':
//             appState.title.text = action.text
//             break
//         case 'UPDATE_TITLE_COLOR':
//             appState.title.color = action.color
//             break
//         default:
//             break
//     }
// }
//
// dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js》' }) // 修改标题文本
// dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色
//
//
// renderApp(appState);
//
//
//
//
// // 抽离出 store
// function createStore(state, stateChanger) {
//     const getState = () => state;
//     const dispatch = (action) => stateChanger(state, action);
//     return {getState, dispatch};
// }
//
// let appState ={
//     title: {
//         text: 'React.js 小书',
//         color: 'red',
//     },
//     content: {
//         text: 'React.js 小书内容',
//         color: 'blue'
//     }
// }
//
// function stateChanger(state, action) {
//     switch (action.type) {
//         case 'UPDATE_TITLE_TEXT':
//             state.title.text = action.text
//             break
//         case 'UPDATE_TITLE_COLOR':
//             state.title.color = action.color
//             break
//         default:
//             break
//     }
// }
//
// const store = createStore(appState, stateChanger);
//
// // 首次渲染页面
// renderApp(store.getState())
// store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js》' })
// // 修改标题文本
// store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' })
// // 修改标题颜色
//
// renderApp(store.getState()) // 把新的数据渲染到页面上
//
//
// function createStore(state, stateChanger) {
//     const listeners = [];
//     const subscribe = (listener) => listener.push(listener);
//     const getState = () => state;
//     const dispatch = (action) => {
//         stateChanger(state, action);
//         listeners.forEach( (listener) => listener() );
//     }
//     return { getState, dispatch, subscribe }
// }
//
//
// const store = createStore(appState, stateChanger());
// store.subscribe( () => renderApp(store.getState()) );
//
// renderApp(store.getState()) // 首次渲染页面
// store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
// store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色
//
//
// const store = createStore(appState, stateChanger)
// store.subscribe(() => renderApp(store.getState()))
// store.subscribe(() => renderApp2(store.getState()))
// store.subscribe(() => renderApp3(store.getState()))
//
//

// function createStore (state, stateChanger) {
//     const listeners = []
//     const subscribe = (listener) => listeners.push(listener)
//     const getState = () => state
//     const dispatch = (action) => {
//         stateChanger(state, action)
//         listeners.forEach((listener) => listener())
//     }
//     return { getState, dispatch, subscribe }
// }
//
// function renderApp (appState) {
//     console.log('render app...')
//     renderTitle(appState.title)
//     renderContent(appState.content)
// }
//
// function renderTitle (title) {
//     console.log('render title...')
//     const titleDOM = document.getElementById('title')
//     titleDOM.innerHTML = title.text
//     titleDOM.style.color = title.color
// }
//
// function renderContent (content) {
//     console.log('render content...')
//     const contentDOM = document.getElementById('content')
//     contentDOM.innerHTML = content.text
//     contentDOM.style.color = content.color
// }
//
// let appState = {
//     title: {
//         text: 'React.js 小书',
//         color: 'red',
//     },
//     content: {
//         text: 'React.js 小书内容',
//         color: 'blue'
//     }
// }
//
// function stateChanger (state, action) {
//     switch (action.type) {
//         case 'UPDATE_TITLE_TEXT':
//             state.title.text = action.text
//             break
//         case 'UPDATE_TITLE_COLOR':
//             state.title.color = action.color
//             break
//         default:
//             break
//     }
// }
//
// const store = createStore(appState, stateChanger)
// store.subscribe(() => renderApp(store.getState())) // 监听数据变化
//
// renderApp(store.getState()) // 首次渲染页面
// store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js》' }) // 修改标题文本
// store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色
//
// /*
// * 前三个毫无疑问是第一次渲染打印出来的。中间三个是第一次 store.dispatch 导致的，最后三个是第二次 store.dispatch 导致的。可以看到问题就是，每当更新数据就重新渲染整个 App，
// * 但其实我们两次更新都没有动到 appState 里面的 content 字段的对象，而动的是 title 字段。其实并不需要重新 renderContent，它是一个多余的更新操作，现在我们需要优化它。
// *
// * */
//
// function renderApp (newAppState, oldAppState = {}) { // 防止 oldAppState 没有传入，所以加了默认参数 oldAppState = {}
//     if (newAppState === oldAppState) return // 数据没有变化就不渲染了
//     console.log('render app...')
//     renderTitle(newAppState.title, oldAppState.title)
//     renderContent(newAppState.content, oldAppState.content)
// }
//
// function renderTitle (newTitle, oldTitle = {}) {
//     if (newTitle === oldTitle) return // 数据没有变化就不渲染了
//     console.log('render title...')
//     const titleDOM = document.getElementById('title')
//     titleDOM.innerHTML = newTitle.text
//     titleDOM.style.color = newTitle.color
// }
//
// function renderContent (newContent, oldContent = {}) {
//     if (newContent === oldContent) return // 数据没有变化就不渲染了
//     console.log('render content...')
//     const contentDOM = document.getElementById('content')
//     contentDOM.innerHTML = newContent.text
//     contentDOM.style.color = newContent.color
// }
//
//
// const store = createStore(appState, stateChanger);
// let oldState = store.getState();
// store.subscribe( () => {
//    const newState = store.getState();
//    renderApp(newState, oldState);
//    oldState = newState;
// });
//
// // 共享结构对象
//
// const obj = { a:1, b:2};
// // 新建的一个对象
// const obj2 = {...obj};
//
// const obj3={...obj, b:3, c:4}
//
//
// function stateChanger(state, action){
//     switch(action.type){
//         case 'UPDATE_TITLE_TEXT':
//             return{
//                 ...state,
//                 title:{
//                     ...state.title,
//                     text:action.text
//                 }
//             }
//         case 'UPDATE_TITLE_COLOR':
//             return { // 构建新的对象并且返回
//                 ...state,
//                 title: {
//                     ...state.title,
//                     color: action.color
//                 }
//             }
//         default:
//             return state // 没有修改，返回原来的对象
//     }
// }
//
// function createStore(state,  stateChanger) {
//     const listeners = []
//     const subscribe = (listener) => listeners.push(listener);
//     const getState = () => state;
//     const dispatch = (action) => {
//         state = stateChanger(state, action); // 覆盖
//         listeners.forEach( (listener) => listener());
//     }
//
//     return { getState, dispatch, subscribe };
//
// }




// function createStore (state, stateChanger) {
//     const listeners = []
//     const subscribe = (listener) => listeners.push(listener)
//     const getState = () => state
//     const dispatch = (action) => {
//         state = stateChanger(state, action) // 覆盖原对象
//         listeners.forEach((listener) => listener())
//     }
//     return { getState, dispatch, subscribe }
// }
//
// function renderApp (newAppState, oldAppState = {}) { // 防止 oldAppState 没有传入，所以加了默认参数 oldAppState = {}
//     if (newAppState === oldAppState) return // 数据没有变化就不渲染了
//     console.log('render app...')
//     renderTitle(newAppState.title, oldAppState.title)
//     renderContent(newAppState.content, oldAppState.content)
// }
//
// function renderTitle (newTitle, oldTitle = {}) {
//     if (newTitle === oldTitle) return // 数据没有变化就不渲染了
//     console.log('render title...')
//     const titleDOM = document.getElementById('title')
//     titleDOM.innerHTML = newTitle.text
//     titleDOM.style.color = newTitle.color
// }
//
// function renderContent (newContent, oldContent = {}) {
//     if (newContent === oldContent) return // 数据没有变化就不渲染了
//     console.log('render content...')
//     const contentDOM = document.getElementById('content')
//     contentDOM.innerHTML = newContent.text
//     contentDOM.style.color = newContent.color
// }
//
// let appState = {
//     title: {
//         text: 'React.js 小书',
//         color: 'red',
//     },
//     content: {
//         text: 'React.js 小书内容',
//         color: 'blue'
//     }
// }
//
// function stateChanger (state, action) {
//     switch (action.type) {
//         case 'UPDATE_TITLE_TEXT':
//             return { // 构建新的对象并且返回
//                 ...state,
//                 title: {
//                     ...state.title,
//                     text: action.text
//                 }
//             }
//         case 'UPDATE_TITLE_COLOR':
//             return { // 构建新的对象并且返回
//                 ...state,
//                 title: {
//                     ...state.title,
//                     color: action.color
//                 }
//             }
//         default:
//             return state // 没有修改，返回原来的对象
//     }
// }
//
// const store = createStore(appState, stateChanger)
// let oldState = store.getState() // 缓存旧的 state
// store.subscribe(() => {
//     const newState = store.getState() // 数据可能变化，获取新的 state
//     renderApp(newState, oldState) // 把新旧的 state 传进去渲染
//     oldState = newState // 渲染完以后，新的 newState 变成了旧的 oldState，等待下一次数据变化重新渲染
// })
//
// renderApp(store.getState()) // 首次渲染页面
// store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js》' }) // 修改标题文本
// store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色

import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import './index.css'

function createStore(reducer){
    let state = null;
    const listeners = [];
    const subscribe =  (listener) => listeners.push(listener);
    const getState = () => state;
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach( (listener) => listener() );
    }
    dispatch({}) // 初始化state
    return {getState, dispatch, subscribe}
}

// reducer
const themeReducer = (state, action) => {
    if(!state) return {
        themeColor : 'red'
    }

    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, themeColor: action.themeColor }
        default:
            return state
    }
}

const store = createStore(themeReducer);

class Index extends Component {

    static childContextTypes = {
        // store : PropTypes.object
    }

    getChildContext(){
        return { store };
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


ReactDOM.render(
    <Index />,
    document.getElementById('root')
)





