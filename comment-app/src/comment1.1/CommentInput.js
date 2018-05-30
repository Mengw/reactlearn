/**
 * Created by Administrator on 2018/5/29.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

/*
*  这些控件，如果只写上value，改不了里面的值，
*  不依赖 DOM 操作的组件启动的操作都可以放在 componentWillMount 中进行
*
*  组件的私有方法都用 _ 开头，所有事件监听的方法都用 handle 开头。把事件监听方法传给组件的时候，属性名用 on 开头
* */
class CommentInput extends  Component{

    static propTypes = {
        onSubmit: PropTypes.func
    }

    constructor(){
        super();
        this.state = {
          username : '',
            content : ''
        };
    }

    // 页面加载完自动聚焦到输入框
    componentDidMount(){
        this.textarea.focus();
        this._loadUsername();
    }

    _loadUsername(){
        const username = localStorage.getItem('username');
        if(username){
            this.setState({ username })
        }
    }


    handleUsernameChange(event){
        this.setState({
            username : event.target.value
        });
    }

    handleUsernameBlur(event){
        this._saveUserName(event.target.value);
    }

    _saveUserName(username){
        localStorage.setItem('username', username);
    }

    handleContentChage(event){
        this.setState({
           content: event.target.value
        });
    }

    handleSubmit(){
        if(this.props.onSubmit){
            const { username, content } = this.state;
            this.props.onSubmit({
                username,
                content,
                createdTime : +new Date()
            });
        }
        this.setState({ content :''});
    }

    render() {
        return (
            <div className="comment-input">
                <div className="comment-field">

                    <span className="comment-field-name">用户名</span>
                    <div className="comment-field-input">
                        <input
                            value={this.state.username}
                            onChange={this.handleUsernameChange.bind(this)}
                            onBlur={this.handleUsernameBlur.bind(this)}
                        />
                    </div>

                    <div className='comment-field'>
                        <span className='comment-field-name'>评论内容：</span>
                        <div className='comment-field-input'>
                            <textarea
                                ref={ (textarea) => this.textarea = textarea }
                                value={this.state.content}
                                onChange={this.handleContentChage.bind(this)}
                            />
                        </div>
                    </div>

                    <div className='comment-field-button'>
                        <button onClick={this.handleSubmit.bind(this)}>
                            发布
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}

export default CommentInput;