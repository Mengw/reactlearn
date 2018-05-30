/**
 * Created by Administrator on 2018/5/30.
 */


import React, { Component } from 'react';



export class Card extends Component{
    render (){
        return <div className="card">
            <div className="card-content">
                {this.props.content}
            </div>
            <div>
                {this.props.children}
            </div>
        </div>
    }
}

export class Layout extends Component{

    render(){
        return <div className="two-cols-layout"><div className="sidebar">{this.props.children[0]}</div> <div className='main'>
            {this.props.children[1]}
        </div> </div>
    }
}


export class BlackBorderContainer extends Component {
    /* TODO */
    return(){
        return <div className="">{ this.props.children.map(el => {
            <div>{el}</div>
        })}</div>
    }
}
