/**
 * Created by Administrator on 2018/5/29.
 */
import React, { Component } from 'react';
import Comment from './Comment'


class CommentList extends Component{

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
    render(){
        /*const comments = [{username: 'Jerry', content: 'Hello'},
            {username: 'Tomy', content: 'World'},
            {username: 'Lucy', content: 'Good'}];*/
        /*return <div>{ comments.map( (comment, i) =>
        { return <div key={i}>{comment.username} :{comment.content}</div>})}
        </div>*/

        return <div>
            { this.props.comments.map(
                (comment, i) => <Comment comment={comment} key={i} />
            )}
        </div>

    }
}

export default CommentList;