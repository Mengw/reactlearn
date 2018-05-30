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

function createStore (state, stateChanger) {
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        stateChanger(state, action)
        listeners.forEach((listener) => listener())
    }
    return { getState, dispatch, subscribe }
}

function renderApp (appState) {
    console.log('render app...')
    renderTitle(appState.title)
    renderContent(appState.content)
}

function renderTitle (title) {
    console.log('render title...')
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = title.text
    titleDOM.style.color = title.color
}

function renderContent (content) {
    console.log('render content...')
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = content.text
    contentDOM.style.color = content.color
}

let appState = {
    title: {
        text: 'React.js 小书',
        color: 'red',
    },
    content: {
        text: 'React.js 小书内容',
        color: 'blue'
    }
}

function stateChanger (state, action) {
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            state.title.text = action.text
            break
        case 'UPDATE_TITLE_COLOR':
            state.title.color = action.color
            break
        default:
            break
    }
}

const store = createStore(appState, stateChanger)
store.subscribe(() => renderApp(store.getState())) // 监听数据变化

renderApp(store.getState()) // 首次渲染页面
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js》' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色

/*
* 前三个毫无疑问是第一次渲染打印出来的。中间三个是第一次 store.dispatch 导致的，最后三个是第二次 store.dispatch 导致的。可以看到问题就是，每当更新数据就重新渲染整个 App，
* 但其实我们两次更新都没有动到 appState 里面的 content 字段的对象，而动的是 title 字段。其实并不需要重新 renderContent，它是一个多余的更新操作，现在我们需要优化它。
*
* */