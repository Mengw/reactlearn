/**
 * Created by Administrator on 2018/5/29.
 */
import React, { Component } from 'react';
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import wrap from './wrapWithLoadData'
import PropTypes from 'prop-types'

class CommentApp extends Component{

    // constructor(){
    //     super();
    //     this.state = {
    //         comments:[]
    //     };
    // }

    // componentWillMount(){
    //     this._loadComments();
    // }
    //
    // _loadComments(){
    //     let comments = localStorage.getItem('comments');
    //     if(comments) {
    //         comments = JSON.parse(comments);
    //         this.setState({comments})
    //     }
    // }
    //
    // _saveComments(comments){
    //     localStorage.setItem('comments', JSON.stringify(comments));
    // }

    static propTypes = {
        data : PropTypes.any,
        saveData : PropTypes.func.isRequired
    }

    constructor(props){
        super(props);
        this.state = { comments : props.data};
    }

    handleSubmitComment(comment){
        if (!comment) return;
        if (!comment.username) return alert('请输入用户名');
        if (!comment.content) return alert('请输入评论内容');
        // console.log(comment);
        const comments = this.state.comments;
        comments.push(comment);
        this.setState({
            comments
        });
        // this._saveComments(comments);
        this.props.saveData(comments);
    }

    handleDeleteComment(index){
        const comments = this.state.comments;
        comments.splice(index, 1);
        this.setState({comments});
        this._saveComments(comments);
    }


    render() {
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList
                    comments={this.state.comments}
                    onDeleteComment={this.handleDeleteComment.bind(this)}
                />
            </div>
        )
    }



}

CommentApp = wrap(CommentApp, 'comments');
export default CommentApp;