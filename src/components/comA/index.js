import React from "react";

import {connect} from "react-redux";
import './index.css'

class comA extends React.Component{
    render() {
        // console.log('coma',this.props);
        return (
            <div className="num">{this.props.value}</div>
        )
    }
}

// connect 要的参数 ，返回值为一个对象
const mapStateToProps = state=> {
    return state
}

export default connect(mapStateToProps)(comA)