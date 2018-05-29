/**
 * Created by Administrator on 2018/5/29.
 */
import React, { Component } from 'react'

/*
*  这些控件，如果只写上value，改不了里面的值，
*
* */


class CommentInput extends  Component{

    constructor(){
        super();
        this.state = {
          username : '',
            content : ''
        };
    }

    handleUsernameChange(event){
        this.setState({
            username : event.target.value
        });
    }

    handleContentChage(event){
        this.setState({
           content: event.target.value
        });
    }

    handleSubmit(){
        if(this.props.onSubmit){
            const { username, content } = this.state;
            this.props.onSubmit({username, content});
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
                        />
                    </div>

                    <div className='comment-field'>
                        <span className='comment-field-name'>评论内容：</span>
                        <div className='comment-field-input'>
                            <textarea
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