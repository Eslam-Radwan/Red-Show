import { createBrowserRouter } from 'react-router-dom';
import signupAction from '../actions/signupAction';
import loginAction from "../actions/loginAction";
import Registration from '../pages/Registration';

export const router = createBrowserRouter([
    {
        path:'/signup',
        Component: Registration,
        action: signupAction,
        
    },
    {
        path:'/login',
        Component: Registration,
        action:loginAction
    }
 ]);
