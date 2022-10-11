import React from "react";
import store from "../store";
import {sendAction} from "../action/index";

import {connect} from "react-redux";

class Abutton extends React.Component {
    //监听组件加载完成
    // componentDidMount() {
    //     store.subscribe(() => {
    //         console.log('subscribe',store.getState());
    //         this.setState({})
    //     })
    // }
    render() {
        return (
            <>
                <button className="btn" onClick={this.handleClickAdd}>+</button>
                <button className="btn" onClick={this.handleClickDel}>-</button>
                {/* <div>{store.getState().value}</div> */}
            </>
        )
    }

    //按钮点击方法 增加
    handleClickAdd = ()=> {
        // console.log(11);
        // store.dispatch(sendAction());
        // console.log(this.props);
        this.props.sendAction();
    }

    //按钮点击方法 减少
    handleClickDel = ()=> {
        console.log(this.props);
        this.props.delAction();
    }
}

// connect 要的参数 ，返回值为一个对象
// 参数 dispatch
const mapDiapatchToProps = (dispatch)=> {
    return {
        sendAction:  ()=> {
            //利用dispatch发送一个action
            dispatch({
                type: 'add'
            })
        },
        delAction: ()=> {
            dispatch({
                type: 'del'
            })
        }
    }
}

export default connect(null,mapDiapatchToProps)(Abutton)