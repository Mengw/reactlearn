/**
 * Created by Administrator on 2018/5/30.
 */

import React, { Component } from 'react';

export class Editor extends Component{
    constructor(){
        super();
        this.state = {
            content: '<h1>react.js</h1>'
        };
    }

    // 这里直接显示的是字符串的内容
    render(){
        return <div>haha{this.state.content}</div>
    }
}

// React.js 中你需要把 CSS 属性变成一个对象再传给元素
export class Editor1 extends Component{
    constructor(){
        super();
        this.state = {
            content: '<h1>react.js</h1>'
        };
    }

    // 这里直接显示的是字符串的内容
    render(){
        return <div>
            <div dangerouslySetInnerHTML={{__html: this.state.content}}></div>
            <h1 style={{fontSize: '12px', color: this.state.color}}>React.js</h1>
        </div>
    }
}


// 完成一个函数 getDefaultStyledPost，这个函数接受一个表示样式的对象作为参数，返回一个组件只有 <p> 元素的组件：
const getDefaultStyledPost = (defaultStyle) => {
    /* TODO */

    return class Post extends Component{
        render(){
            const style = {...defaultStyle, ...this.props.style};
            return <p style={style}></p>
        }
    }
}

const getDefaultStyledPost = (defaultStyle) => {
    return props => <p style = {{...defaultStyle, ...props.style}} />
}