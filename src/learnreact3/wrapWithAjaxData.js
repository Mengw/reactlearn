/**
 * Created by Administrator on 2018/5/30.
 */


export default (WrappedComponent, name) => {
    class NewComponent extends Component {
        constructor () {
            super()
            this.state = { data: null }
        }

        componentWillMount () {
            ajax.get('/data/' + name, (data) => {
                this.setState({ data })
            })
        }

        render () {
            return <WrappedComponent data={this.state.data} />
        }
    }
    return NewComponent
}