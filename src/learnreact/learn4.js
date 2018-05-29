/**
 * Created by Administrator on 2018/5/28.
 */
import React, { Component } from 'react';

export class LikeButton extends Component{
    constructor(){
        super();
        this.state = { isLiked : false};
    }

    handleClickOnLikeButton(){
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render(){
        const likedText = this.props.likedText || 'cancel';
        const unLikedText = this.props.unlikedText || 'agree';
        return (
            <div>
                <button onClick={this.handleClickOnLikeButton.bind(this)}>
                    {this.state.isLiked ? likedText : unLikedText}
                </button>
            </div>
        )
    }
}

export class Index extends Component {
    render () {
        return (
            <div>
                <LikeButton likedText='已赞' unlikedText='赞' />
            </div>
        )
    }
}

export class Index extends Component {
    render () {
        return (
            <div>
                <LikeButton wordings={{likedText: '已赞', unlikedText: '赞'}} />
            </div>
        )
    }
}


class LikeButton extends Component {
    static defaultProps = {
        likedText: '取消',
        unlikedText: '点赞'
    }

    constructor () {
        super()
        this.state = { isLiked: false }
    }

    handleClickOnLikeButton () {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render () {
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked
                    ? this.props.likedText
                    : this.props.unlikedText} 👍
            </button>
        )
    }
}


export class Computer extends Component {

  constructor(){
      super();
      this.state = { status : 'off' };
  }

  openAndClose(){
      const state = this.state;
      if(state.status === 'off'){
          state.status = 'on';
      }else {
          state.status = 'off';
      }
      this.setState({
          state
      });
  }

    render () {
        return (
            <div>
                <button onClick={this.openAndClose.bind(this)}>开关</button>
                <Screen showContent={this.state.status ==='off'? '显示器关了':'显示器亮了'} />
            </div>
        )
    }
}

export class Screen extends Component {

    static defaultProps = {
        showContent : 'nothing',
    }

    render () {
        return (
            <div className='screen'>{this.props.showContent}</div>
        )
    }
}