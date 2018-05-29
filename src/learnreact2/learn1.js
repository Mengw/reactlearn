/**
 * Created by Administrator on 2018/5/29.
 */

import React, { Component } from 'react';

// input的事件实际是向父亲的组件传递输入的值，然后通过父亲组件传递给另外的兄弟组件，用于显示
class Input extends Component {

    constructor(){
        super();
    }

    handleContentChage(event){
        const number = event.target.value;
        this.props.handleValue(number);
    }

    render () {
        return (
            <div>
                <input type='number'
                       onChange={this.handleContentChage.bind(this)}
                />
            </div>
        )
    }
}


class PercentageShower extends Component {
    render () {
        let showValue = '';
        if(this.props.number !== ''){
            console.log('this.props.number:' + this.props.number);
            showValue = parseFloat(this.props.number);
            showValue = showValue * 100;
        }
        return (
            <div>{showValue}%</div>
        )
    }
}


class PercentageApp extends Component {

    constructor(){
        super();
        this.state = { number : ''};
    }

    handleInputValue(number){
        this.setState({
            number : number
        });
    }

    render () {
        return (
            <div>
                haha
                <Input handleValue={this.handleInputValue.bind(this)} />
                <PercentageShower number={this.state.number} />
            </div>
        )
    }
}

//通过向大括号中添加sex，echo变量并且export输出，就可以将对应变量值以sex、echo变量标识符形式暴露给其他文件而被读取到
//不能写成export sex这样的方式，如果这样就相当于export "boy",外部文件就获取不到该文件的内部变量sex的值，因为没有对外输出变量接口,只是输出的字符串。
export {PercentageApp};
