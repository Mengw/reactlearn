/**
 * Created by Administrator on 2018/5/30.
 */

// 兴奋的看到了最后一章节

import React, { Component } from 'react'
import InputWithUserName from './InputWithUserName'


// const NewComponent = higherOrderComponent(oldComponent);

// 函数编程写法真的很喜欢
export default (WrappedComponent) => {
    class NewComponent extends Component{
        // 可以做很多自定义逻辑

        render(){
            return <WrappedComponent/>
        }
    }

    return NewComponent;
}


class Index extends Component {
    render () {
        return (
            <div>
                用户名：<InputWithUserName />
            </div>
        )
    }
}



