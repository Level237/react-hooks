import { createBrowserRouter } from "react-router-dom";
import TodoPage from '../pages/usecallback/todos/TodoPage';
import ExpensivePage from "../pages/useMemo/expensivePage";







export const routes=createBrowserRouter([{
    path:"/usecallback/todos",
    element:<TodoPage/>,
   
},{
    path:"useMemo/todos",
    element:<ExpensivePage/>,
}

])