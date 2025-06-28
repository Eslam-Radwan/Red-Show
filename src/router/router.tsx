import { createBrowserRouter } from 'react-router-dom';
import signupAction from '../actions/signupAction';
import loginAction from "../actions/loginAction";
import Registration from '../pages/Registration';
import Home from '../pages/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Home
    },
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
