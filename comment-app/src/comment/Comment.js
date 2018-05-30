/**
 * Created by Administrator on 2018/5/29.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Comment extends Component{

    static proTypes = {
        comment : PropTypes.object.isRequired,
        onDeleteComment: PropTypes.func,
        index: PropTypes.number
    }

    constructor(){
        super();
        this.state = { timeString : ''};
    }

    componentWillMount(){
        this._updateTimeString();
        // 这里需要一个定时器，否者需要每次手动刷新页面时间才会更新,但是想一想，如果有100个comment，那不得100个定时器，有点太浪费点
        this._timer = setInterval(
            this._updateTimeString.bind(this),
            5000
        )
    }

    _updateTimeString(){
        const comment = this.props.comment;
        const duration = ( +Date.now() - comment.createdTime) / 1000
        console.log("duration : " + duration);
        this.setState({
            timeString: duration > 60 ? `${Math.round(duration / 60)} 分钟前` : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }


    componentWillUnmount () {
        clearInterval(this._timer)
    }

    handleDeleteComment(){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(this.props.index);
        }
    }

    render () {
        return <div className="comment">
            <div className="comment-user">
                <span> {this.props.comment.username} </span>
            </div>
            <p>{this.props.comment.content}</p>
            <span>{this.state.timeString}</span>
            <span onClick={this.handleDeleteComment.bind(this)}>删除</span>
        </div>
    }

}

export default Comment;