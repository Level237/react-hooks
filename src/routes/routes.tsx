import { createBrowserRouter } from "react-router-dom";
import TodoPage from '../pages/usecallback/todos/TodoPage';







export const routes=createBrowserRouter([{
    path:"/",
    element:<TodoPage/>,
    children:[{
        path:"usecallback/todos",
        element:<TodoPage/>,
    }
        
    ]
}])