/**
 * Created by Administrator on 2018/5/30.
 */


function createStore (state, stateChanger) {
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = stateChanger(state, action) // 覆盖原对象
        listeners.forEach((listener) => listener())
    }
    return { getState, dispatch, subscribe }
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
            return {
                ...state,
                title: {
                    ...state.title,
                    text: action.text
                }
            }
        case 'UPDATE_TITLE_COLOR':
            return {
                ...state,
                title: {
                    ...state.title,
                    color: action.color
                }
            }
        default:
            return state
    }
}

const store = createStore(appState, stateChanger)

// 其实 appState 和 stateChanger 可以合并到一起去

function stateChanger(state, action) {
    if (!state) {
        return {
            title: {
                text: 'React.js 小书',
                color: 'red',
            },
            content: {
                text: 'React.js 小书内容',
                color: 'blue'
            }
        }
    }
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            return {
                ...state,
                title: {
                    ...state.title,
                    text: action.text
                }
            }
        case 'UPDATE_TITLE_COLOR':
            return {
                ...state,
                title: {
                    ...state.title,
                    color: action.color
                }
            }
        default:
            return state
    }
}

function createStore (stateChanger) {
    let state = null
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = stateChanger(state, action)
        listeners.forEach((listener) => listener())
    }
    dispatch({}) // 初始化 state
    return { getState, dispatch, subscribe }
}

function createStore (reducer) {
    let state = null
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }
    dispatch({}) // 初始化 state
    return { getState, dispatch, subscribe }
}

//可以用这个 createStore 来构建不同的 store 了，只要给它传入符合上述的定义的 reducer 即可
// 看到这里，我就焕然大悟了，不同的部分的组件，那就写不同的reducer就好了，各自管各自的
function themeReducer(state, action) {
    if (!state) return {
        themeName: 'Red Theme',
        themeColor: 'red'
    }
    switch (action.type) {
        case 'UPATE_THEME_NAME':
            return { ...state, themeName: action.themeName }
        case 'UPATE_THEME_COLOR':
            return { ...state, themeColor: action.themeColor }
        default:
            return state
    }
}

const store = createStore(themeReducer)

// 定一个 reducer
function reducer (state, action) {
    /* 初始化 state 和 switch case */
}

// 生成 store
const store = createStore(reducer)

// 监听数据变化重新渲染页面
store.subscribe(() => renderApp(store.getState()))

// 首次渲染页面
renderApp(store.getState())

// 后面可以随意 dispatch 了，页面自动更新
store.dispatch()