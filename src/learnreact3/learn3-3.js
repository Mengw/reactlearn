import React, { Component } from 'react'
export const connect = (WrappedComponent) =>{
    class Connect extends Component{
        static contextTypes = {
            store: PropTypes.object
        }

        // TODO: 如何从 store 取数据？

        render () {
            return <WrappedComponent />
        }
    }

    return Connect;
}


const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor,
        themeName: state.themeName,
        fullName: `${state.firstName} ${state.lastName}`
    }
}

export const connect1 = (mapStateToProps) => (WrappedComponent) => {
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