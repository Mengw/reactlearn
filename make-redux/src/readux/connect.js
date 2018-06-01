/**
 * Created by Administrator on 2018/6/1.
 */

export const connect = (mapStateToProps) => (WrappedComonent) => {
    class Connect extends Component{

        static contextTypes ={
            store : PropTypes.object
        }

        constructor(){
            super();
            this.state = {
                allProps:{},
            }
        }

        componentWillMount(){
            const { store} = this.context;
            this
        }

    }
}