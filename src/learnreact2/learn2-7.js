/**
 * Created by Administrator on 2018/5/30.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Comment extends Component {


    render () {

        const { comment } = this.props

    return (
        <div className='comment'>
            <div className='comment-user'>
                <span>{comment.username} </span>：
            </div>
            <p>{comment.content}</p>
        </div>
    )
}
}

// npm install --save prop-types

import React, { Component } from 'react'

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired
    }

    render () {
        const { comment } = this.props
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{comment.username} </span>：
                </div>
                <p>{comment.content}</p>
            </div>
        )
    }
}