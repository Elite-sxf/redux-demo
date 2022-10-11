const initValue = {
    value: 0
}

const reducer = (state=initValue, action) => {
    console.log(action);
    switch(action.type) {
        case "send_type":
            return Object.assign({},state,action);
        case "add":
            return {
                value: state.value + 1
            }
        case "del":
            if(state.value <= 0) { 
                return  {value: 0}
            }
            return {
                value: state.value - 1
            }
        default:
            return state;
    }
}

module.exports = {
    reducer
}