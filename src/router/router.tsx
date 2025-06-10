import { createBrowserRouter } from 'react-router-dom';
import Signup from '../pages/Signup';
import signupAction from '../actions/signupAction';
import Login from '../pages/Login';

export const router = createBrowserRouter([
    {
        path:'/',
        Component: Signup,
        action: signupAction,
        children: [
            {
                path:'/login',
                Component: Login
            }
        ]
    }
 ]);
