/**
 * Created by Administrator on 2018/5/29.
 */
import React, { Component } from 'react';
import Comment from './Comment'
import PropTypes from 'prop-types'


class CommentList extends Component{

    static proTypes = {
        comments : PropTypes.array,
        onDeleteComment : PropTypes.func
    }

    static defaultProps = {
        comments: []
    }

    // 传入默认的数据，防止出现
    /*
    * ×
     ←→1 of 2 errors on the page
     TypeError: Cannot read property 'map' of undefined
     CommentList.render
    18 |
    19 |        return <div>
> 20 |            { this.props.comments.map(
    21 |                (comment, i) => <Comment comment={comment} key={i} />
    22 |            )}
23 |        </div>
    *
    * */

    handleDeleteComment(index){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index);
        }
    }

    render(){
        /*const comments = [{username: 'Jerry', content: 'Hello'},
            {username: 'Tomy', content: 'World'},
            {username: 'Lucy', content: 'Good'}];*/
        /*return <div>{ comments.map( (comment, i) =>
        { return <div key={i}>{comment.username} :{comment.content}</div>})}
        </div>*/

        return <div>
            { this.props.comments.map(
                (comment, i) => <Comment comment={comment} key={i} index={i} onDeleteComment={this.handleDeleteComment.bind(this)} />
            )}
        </div>

    }
}

export default CommentList;