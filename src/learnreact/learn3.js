/**
 * Created by Administrator on 2018/5/27.
 */

import React, { Component } from 'react';

class Title extends Component {
    // handleClickOnTitle () {
    //     console.log('Click on title.')
    // }
    handleClickOnTitle (e) {
        console.log('Click on title.')
        console.log(e.target.innerHTML);
        console.log(this);
    }

    render () {
        return (
            <h1 onClick={this.handleClickOnTitle}>React learn3</h1>
        )
    }

}

class Title2 extends Component {
    // handleClickOnTitle () {
    //     console.log('Click on title.')
    // }
    handleClickOnTitle (e) {
        console.log('Click on title.')
        console.log(e.target.innerHTML);
        console.log(this);
    }

    render () {
        return (
            <h1 onClick={this.handleClickOnTitle.bind(this)}>React learn3</h1>
        )
    }
}


class Title3 extends Component {
    handleClickOnTitle (word, e) {
        console.log(this, word)
    }

    render () {
        return (
            <h1 onClick={this.handleClickOnTitle.bind(this, 'Hello')}>React 小书</h1>
        )
    }
}

export {Title,Title2,Title3};

export class Dog extends Component {
    bark () {
        console.log('bark')
    }

    run () {
        console.log('run')
    }
    // 个人感觉，胡子大大表述的很清楚了，要不要括号看函数申明还是函数调用，当有了箭头 => 时是函数调用，需要加括号，不加箭头就是函数申明了，本例中两种写法都可以，如下：
    // http://scriptoj.mangojuice.top/topic/7/5-%E4%B8%8D%E8%83%BD%E6%91%B8%E7%9A%84%E7%8B%97-%E4%B8%80/17
    render () {
        return (<div onClick={() => {this.bark.bind(this); this.run.bind(this)}}>DOG</div>)
    }
}
