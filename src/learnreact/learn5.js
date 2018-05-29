/**
 * Created by Administrator on 2018/5/29.
 */
import React, { Component } from 'react';

export class HelloWorld extends Component{
    constructor(){
        super();
    }

    sayHi(){
        console.log('say hi')
    }

    render () {
        return (
            <div onClick={this.sayHi.bind(this)}>Hello World</div>
        )
    }
}


const HelloWorld = (props) => {
    const sayHi = (event) => console.log ('say hi');
    return (
        <div onClick={sayHi}>Hello World</div>
    )
}