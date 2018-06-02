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

    // ``包含的内容会用<code> 包含起来
    //  content.replace(/`([\S\s]+?)`/g, '<code>$1</code>')这样做会有严重的 XSS 漏洞，用户可以输入任意的 HTML 标签，用 <script> 执行任意的 JavaScript 代码。所以在替换代码之前，我们要手动地把这些 HTML 标签进行转义：
    _getProcessedContent(content){
        return content
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
            .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }

    render () {
        const{ comment } = this.props;
        return <div className="comment">
            <div className="comment-user">
                <span> {comment.username} </span>
            </div>
            <p dangerouslySetInnerHTML={{ __html : this._getProcessedContent(comment.content) }} />
            <span>{this.state.timeString}</span>
            <span onClick={this.handleDeleteComment.bind(this)}>删除</span>
        </div>
    }

}

export default Comment;