/**
 * Created by Administrator on 2018/5/30.
 */

import React, { Component } from 'react';

export class AutoFocusInput extends Component{
    componentDidMout(){
        this.input.focus()
    }

    render(){
        return <input ref={(input) => this.input =input} />
    }

}


// 完成 Post 组件，接受一个字符串的 content 作为 props，Post 会把它显示到自己的 <p> 元素内。
//并且，点击 <p> 元素的时候，会使用 console.log 把元素的高度打印出来。

export class Post extends Component {

    handle(){
        console.log(this.p.clientHeight);
    }

    render () {
        return (<p ref={(p) => this.p = p }  onClick={this.handle.bind(this)}>{this.props.content}</p>)
    }
}

