/**
 * Created by Administrator on 2018/6/2.
 */


import React, { Component, PropTypes } from 'react'

/*
* 原来 CommentInput 需要从 LocalStorage 中获取 username 字段，
* 现在让它从 props 里面去取；而原来用户名的输入框 blur 的时候需要保存 username 到 LocalStorage 的行为也通过
* props.onUserNameInputBlur 传递到上层去做。现在 CommentInput 是一个 Dumb 组件了，它的所有渲染操作都只依赖于 props 来完成。
*
*
* */
export default class CommentInput extends Component{
    static propTypes = {
        username: PropTypes.any,
        onSubmit: PropTypes.func,
        onUserNameInputBlur: PropTypes.func
    }

    static defaultProps = {
        username: ''
    }

    constructor(props){
        super(props);
        this.state = {
            username: props.username, // 从 props 上取 username 字段
            content: ''
        }
    }

    componentDidMount () {
        this.textarea.focus();
    }

    handleUserNameBlur(event){
        if(this.props.onUserNameInputBlur){
            this.props.onUserNameInputBlur(event.target.value);
        }
    }

    handleUsernameChange (event) {
        this.setState({
            username: event.target.value
        })
    }

    handleContentChange (event) {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit(){
        if(this.props.onSubmit){
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createdTime: +new Date()
            });
        }
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