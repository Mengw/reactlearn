/**
 * Created by Administrator on 2018/5/27.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class Header extends Component {

 // constructor (props) {
 //     super(props)
 // }

 render () {
 return (
 <div id='root'>
 <h1>{this.props.content}</h1>
 </div>
 )
 }
 }


function rederContent(contentDetial) {
    ReactDOM.render(
        <Header content={contentDetial}/>,
        document.getElementById('root')
    );
}

// rederContent('Hello World');

export default rederContent;