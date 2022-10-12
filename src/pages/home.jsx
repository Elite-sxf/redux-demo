import React from "react";
import { useNavigate } from "react-router-dom";

// export default class home  extends React.Component{
        
//         constructor(props) {
//             super(props);
//             // this.state = {
//             //     navigate: useNavigate(),
//             // }
//             cosnt navigate = useNavigate(),
//         }

//         goLogin = ()=> {
//             navigate("/login")
//         }
//     render() {
//         return (
//             <>
//                 <div>home</div>
//                 <button onClick={this.goLogin}>点击前往登陆页面</button>
//             </>
//         )
//     }
// }

const  Home = ()=> {
    const navigate = useNavigate()
    const goLogin = ()=> {
            navigate("/login")
        }
    return(
        <>
            <div>home</div>
            <button onClick={goLogin}>点击前往登陆页面</button>
        </>
    )
}
export default Home
