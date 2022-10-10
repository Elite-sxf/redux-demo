import React from "react";
import store from "../store";
import {sendAction} from "../action/index";

export default class Abutton extends React.Component {
    //监听组件加载完成
    componentDidMount() {
        console.log('subscribe');
        store.subscribe(() => {
            console.log('subscribe',store.getState());
            this.setState({})
        })
    }
    render() {
        return (
            <>
                <button onClick={this.handleClick}>这是一个按钮</button>
                <div>{store.getState().value}</div>
            </>
        )
    }


    //按钮点击方法
    handleClick() {
        // console.log(11);
        store.dispatch(sendAction())
    }
}