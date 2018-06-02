/**
 * Created by Administrator on 2018/6/2.
 */

import { connect } from 'react-redux'
import Header from '../components/Header'

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}
export default connect(mapStateToProps)(Header)