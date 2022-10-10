const initValue = {
    value: "默认值"
}

const reducer = (state=initValue, action) => {
    console.log(action);
    switch(action.type) {
        case "send_type":
            return Object.assign({},state,action);
        default:
            return state;
    }
}

module.exports = {
    reducer
}