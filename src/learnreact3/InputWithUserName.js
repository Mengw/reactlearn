/**
 * Created by Administrator on 2018/5/30.
 */
import wrapWithLoadData from './wrapWithLoadData1'
import wrapWithAjaxData1 from './wrapWithAjaxData'
import wrapWithAjaxData12 from './wrapWithAjaxData1'


// 仅仅本地获取
class InputWithUserName extends Component{
    render (){
        return <input value={this.props.data} />
    }
}

InputWithUserName = wrapWithLoadData(InputWithUserName, 'username');
export default InputWithUserName;

// 仅仅ajax
class InputWithUserName extends Component {
    render () {
        return <input value={this.props.data} />
    }
}

InputWithUserName = wrapWithAjaxData1(InputWithUserName, 'username')
export default InputWithUserName

// 先local 后ajax
class InputWithUserName extends Component {
    render () {
        return <input value={this.props.data} />
    }
}

InputWithUserName = wrapWithAjaxData12(InputWithUserName)
InputWithUserName = wrapWithLoadData(InputWithUserName, 'username')
export default InputWithUserName
