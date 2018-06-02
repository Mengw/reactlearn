/**
 * Created by Administrator on 2018/6/1.
 */
import React ,{ Component} from 'React';
import { connect } from './connect'

class Header extends Component{
    static contextTypes = {
        store: PropTypes.object
    }

    constructor(){
        super();
        this.state = { themeColor: '' }
    }

    componentWillMount () {
        const { store } = this.context
        this._updateThemeColor()
        store.subscribe(() => this._updateThemeColor())
    }

    _updateThemeColor () {
        const { store } = this.context
        const state = store.getState()
        this.setState({ themeColor: state.themeColor })
    }

    render () {
        return (
            <h1 style={{ color: this.state.themeColor }}>React.js 小书</h1>
        )
    }
}