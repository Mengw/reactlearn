/**
 * Created by Administrator on 2018/5/30.
 */

class Clock extends Component {
    constructor () {
        super()
        this.state = {
            date: new Date()
        }
    }

    componentWillMount () {
        this.timer = setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000)
    }

    componentWillUnmount () {
        clearInterval(this.timer)
    }

    render () {
        return (
            <div>
                <h1>
                    <p>现在的时间是</p>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}

class Index extends Component {
    render () {
        return (
            <div>
                <Clock />
            </div>
        )
    }
}


class Index extends Component {
    constructor () {
        super()
        this.state = { isShowClock: true }
    }

    handleShowOrHide () {
        this.setState({
            isShowClock: !this.state.isShowClock
        })
    }

    render () {
        return (
            <div>
                {this.state.isShowClock ? <Clock /> : null }
                <button onClick={this.handleShowOrHide.bind(this)}>
                    显示或隐藏时钟
                </button>
            </div>
        )
    }
}


// getPostData 已经可以直接使用
// 小提示：本系统可以直接 async/await
class Post extends Component {
    constructor(){
        super();
        this.state = { content : ''}
    }

    comonentWillMount(){
        this._loadData();
    }

    async _loadData(){
        this.setState({ content: "数据加载中"});
        const content = await getPostData();
        this.setState({content})
    }

    render(){
        return <div><div className="post-content">{this.state.content}</div><button onClick={ () => {this._loadData() }}> 刷新 </button></div>
    }


    render () {
        return (
            <div>
                <div className='post-content'></div>
                <button>刷新</button>
            </div>
        )
    }
}


class Post extends Component{
    constructor(){
        super();
        this.state = {
          load : '数据加载中'
        };
    }


    componentDidMount(){
        getPostData().then(
            postContent => {
                this.setState({
                    load: postContent
                });
            }
        )
    }

    reload(){
        this.setState({
            load : '数据加载中...'
        });

        getPostData().then(postContent => {
            this.setState({
                load: postContent
            })
        });
    }

    render(){
        const{load} = this.state;
        return <div> <div className="post-content">{load}</div> <button onClick={this.reload.bind(this)} >刷新</button></div>
    }



}