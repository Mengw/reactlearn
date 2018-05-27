/**
 * Created by Administrator on 2018/5/27.
 */

const button = document.querySelector('.like-btn');
const buttonText = button.querySelector('.like-text');
let isLiked = false;

button.addEventListener('click', () => {
    isLiked = !isLiked;
    if(isLiked){
        buttonText.innerHTML = '取消';
    }else {
        buttonText.innerHTML = '点赞';
    }
}, false);

class LikeButton{
        render () {
            return `
        <button id='like-btn'>
          <span class='like-text'>赞</span>
          <span>👍</span>
        </button>
      `
        }
}

const warpper = document.querySelector('.wrapper');
const likeButton1 = new LikeButton()
warpper.innerHTML = likeButton1.render();

const likeButton2 = new LikeButton()
wrapper.innerHTML += likeButton2.render()


// 第二部分演化，上面的render函数返回的就是字符串,不能很好的绑定事件
// ::String => ::Document
const createDOMFromString = (domString) => {
    const div = document.createElement('div');
    div.innerHTML = domString;
    return div;
}

// 升级这个类,render函数返回的是个div dom
class LikeButton {
    render(){
        this.el =  createDOMFromString(`
        <button class='like-button'>
          <span class='like-text'>点赞</span>
          <span>👍</span>
        </button>
        `);

        this.el.addEndEventListener('click', () => console.log('click'), false);
        return this.el;
    }
}


const wrapper = document.querySelector('.wrapper');
const likeButton1 = new LikeButton();
warpper.appendChild(likeButton1.render());
const likeButton2 = new LikeButton()
wrapper.appendChild(likeButton2.render())

// 上面的代码只有log，没有文本的变化，点zan和取消的变化

class LikeButton {
    constructor(){
        this.state = { isLiked: false}
    }

    changeLikeText(){
        const likeText = this.el.querySelector('.like-text');
        this.state.isLiked = ! this.state.isLiked;
        likeText.innerHTML = this.state.isLiked ? 'cancel':'ageree';
    }

    render(){
        this.el = createDOMFromString(`
        <button class='like-button'>
          <span class='like-text'>点赞</span>
          <span>👍</span>
        </button>
      `);
        this.el.addEndEventListener('click', this.changeLikeText().bind(this), false);
        return this.el;
    }
}

// 代码中混杂着对 DOM 的操作其实是一种不好的实践，手动管理数据和 DOM 之间的关系会导致代码可维护性变差、容易出错。
// 状态改变 -> 构建新的 DOM 元素更新页面
class LikeButton {
    constructor() {
        this.state = {isLiked: false}
    }

    setState(state){
        this.state = state;
        this.el = this.render();
    }

    changeLikeText(){
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render () {
        this.el = createDOMFromString(`
        <button class='like-btn'>
          <span class='like-text'>${this.state.isLiked ? '取消' : '点赞'}</span>
          <span>👍</span>
        </button>
      `)
        this.el.addEventListener('click', this.changeLikeText.bind(this), false)
        return this.el
    }
}

// 优化是不是必须render的操作
class LikeButton {
    constructor() {
        this.state = {isLiked: false}
    }

    setState(state){
       const oldEl = this.el;
       this.state = state;
       this.el = this.render();
       if(this.onStateChange)
           this.onStateChange(oldEl,this.el)
    }

    changeLikeText(){
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render () {
        this.el = createDOMFromString(`
        <button class='like-btn'>
          <span class='like-text'>${this.state.isLiked ? '取消' : '点赞'}</span>
          <span>👍</span>
        </button>
      `)
        this.el.addEventListener('click', this.changeLikeText.bind(this), false)
        return this.el
    }
}

const likeButton11 = new LikeButton();
warpper.appendChild(likeButton11.render());
//  这个版本，页面就会有变化了，上面的这个版本页面不会变化，render之后的dom没有插入进去
likeButton11.onStateChange = (oldEl, newEl) => {
    warpper.insertBefore(newEl, oldEl);
    warpper.removeChild(oldEl);
}

// 抽出公共的render的处理方式，也就成了react了
class Component {
    setState(state){
        const oldEl = this.el;
        this.state = state;
        this._renderDOM();
        if(this.onStateChange)
            this.onStateChange(oldEl, this.el);
    }

    _renderDOM(){
        this.el =  createDOMFromString(this.render())
        if(this.onClick){
            this.el.addEndEventListener('click', this.onClick.bind(this),false);
        }
        return this.el;
    }


}

const mount = (component, warpper) => {
    wrapper.appendChild(component._renderDOM())
    component.onStateChange = (oldEl, newEl) => {
        wrapper.insertBefore(newEl, oldEl)
        wrapper.removeChild(oldEl)
    }
}

// 最终版的类似react
class LikeButton extends Component{
    constructor(){
        super();
        this.state = { isLiked : false};
    }

    onClick(){
        this.setState({
            isLiked: !this.state.isLiked
        });
    }

    render () {
        return `
        <button class='like-btn'>
          <span class='like-text'>${this.state.isLiked ? '取消' : '点赞'}</span>
          <span>👍</span>
        </button>
      `
    }
}

mount(new LikeButton(), warpper);


class Component {

    constructor (props = {}) {
        this.props = props
    }

    setState(state){
        const oldEl = this.el;
        this.state = state;
        this._renderDOM();
        if(this.onStateChange)
            this.onStateChange(oldEl, this.el);
    }

    _renderDOM(){
        this.el =  createDOMFromString(this.render())
        if(this.onClick){
            this.el.addEndEventListener('click', this.onClick.bind(this),false);
        }
        return this.el;
    }


}


class LikeButton extends Component {
    constructor (props) {
        super(props)
        this.state = { isLiked: false }
    }

    onClick () {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render () {
        return `
        <button class='like-btn' style="background-color: ${this.props.bgColor}">
          <span class='like-text'>
            ${this.state.isLiked ? '取消' : '点赞'}
          </span>
          <span>👍</span>
        </button>
      `
    }
}

mount(new LikeButton({ bgColor: 'red' }), wrapper)

class RedBlueButton extends Component {
    constructor (props) {
        super(props)
        this.state = {
            color: 'red'
        }
    }

    onClick () {
        this.setState({
            color: 'blue'
        })
    }

    render () {
        return `
        <div style='color: ${this.state.color};'>${this.state.color}</div>
      `
    }
}


