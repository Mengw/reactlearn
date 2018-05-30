/**
 * Created by Administrator on 2018/5/30.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types'


/*
* 一个组件可以通过 getChildContext 方法返回一个对象，这个对象就是子树的 context，提供 context 的组件必须提供 childContextTypes 作为 context 的声明和验证。
* 官方不建议直接用这个玩意，还是直接用redux，后面的这块参见redux的内容程序
* */

class Index31 extends Component {

    static childContextTypes = {
        themeColor : PropTypes.string
    }

    constructor(){
        super();
        this.state = { themeColor: 'red'}
    }

    getChildContext(){
        return { themeColor : this.state.themeColor }
    }

    componentWillMount () {
        this.setState({ themeColor: 'green' })
    }

    render () {
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}

class Header extends Component {
    render () {
        return (
            <div>
                <h2>This is header</h2>
                <Title />
            </div>
        )
    }
}

class Main extends Component {
    render () {
        return (
            <div>
                <h2>This is main</h2>
                <Content />
            </div>
        )
    }
}

class Title extends Component {

    static contextTypes = {
        themeColor : PropTypes.string
    }


    render () {
        return (
            <h1 style={{ color : this.context.themeColor }}>React.js 标题</h1>
        )
    }
}


class Content extends Component {
    render () {
        return (
            <div>
                <h2>React.js 内容</h2>
            </div>
        )
    }
}

export {Index31};