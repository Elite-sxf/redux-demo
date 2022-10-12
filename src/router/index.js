import { createBrowserRouter} from "react-router-dom"

import Home from "../pages/home";
import Login from "../pages/login";

//生成history模式
//createHashRouter hash模式
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/login",
        element: <Login></Login>
    },
])

export default router