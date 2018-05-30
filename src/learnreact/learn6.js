/**
 * Created by Administrator on 2018/5/29.
 */
import React, { Component } from 'react';

const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
];

export class Index161 extends Component {
    render () {
        return (
            <div>
                {[
                    <span>React.js </span>,
                    <span>is </span>,
                    <span>good</span>
                ]}
            </div>
        )
    }
}

export class Index162 extends Component {
    render () {
        const userElements = [];
        for(let user of users){
            userElements.push(
                <div>
                    <div>姓名：{user.username}</div>
                    <div>年龄：{user.age}</div>
                    <div>性别：{user.gender}</div>
                    <hr />
                </div>
            )
        }
        return (
            <div>{userElements}</div>
        )
    }
}



class Index extends Component {
    render () {
        return (
            <div>
                {users.map((user) => {
                    return (
                        <div>
                            <div>姓名：{user.username}</div>
                            <div>年龄：{user.age}</div>
                            <div>性别：{user.gender}</div>
                            <hr />
                        </div>
                    )
                })}
            </div>
        )
    }
}


const lessons = [
    { title: 'Lesson 1: title', description: 'Lesson 1: description' },
    { title: 'Lesson 2: title', description: 'Lesson 2: description' },
    { title: 'Lesson 3: title', description: 'Lesson 3: description' },
    { title: 'Lesson 4: title', description: 'Lesson 4: description' }
]


class Lesson66 extends Component {
    /* TODO */
    handle(){
        console.log(this.props.uid);
        console.log('${this.props.uid} - ${this.props.lesson.title}');
        console.log(`${this.props.uid} - ${this.props.lesson.title}`);
    }

    render(){
        return <div onClick={this.handle.bind(this)}>
            {this.props.lesson.title}
            {this.props.lesson.description}
        </div>
    }
}

class LessonsList extends Component {
    /* TODO */

    render(){
        const lessons = this.props.lessons;
        return lessons.map((item,i) => {
            return <Lesson66 key={i} uid={i} lesson={item}/>
        })
    }
}

export class Index66 extends Component{
    render(){
        return <LessonsList lessons={lessons} />
    }
}