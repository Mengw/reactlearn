/**
 * Created by Administrator on 2018/6/1.
 */

import React, { Component, PropTypes } from 'react'

export const connect = (mapStateToProps) => (WrappedComponent) => {
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        }

        render () {
            const { store } = this.context
            let stateProps = mapStateToProps(store.getState())
            // {...stateProps} 意思是把这个对象里面的属性全部通过 `props` 方式传递进去
            return <WrappedComponent {...stateProps} />
        }
    }

    return Connect
}


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
            this._updateProps();
            store.subscribe(() => this._updateProps());
        }

        _updateProps () {
            const { store } = this.context
            let stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props)
                : {}// 额外传入 props，让获取数据更加灵活方便

            let dispatchProps = mapDispatchToProps
                ? mapDispatchToProps(store.dispatch, this.props)
                : {} // 防止 mapDispatchToProps 没有传入

            this.setState({
                allProps: {
                    ...stateProps,
                    ...dispatchProps,
                    ...this.props
                }
            })
        }

        render () {
            return <WrappedComponent {...this.state.allProps} />
        }

    }
}