import { createBrowserRouter, redirect } from 'react-router-dom';
import signupAction from '../actions/signupAction';
import loginAction from "../actions/loginAction";
import Registration from '../pages/Registration';
import Home from '../pages/Home';
import MovieDetail from '../pages/MovieDetail';
import TVDetail from '../pages/TVDetail';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Home
    },
    {
        path:'/signup',
        Component: Registration,
        action: signupAction,
        loader: () => {
            const user = localStorage.getItem('user')
            if(user)
                return redirect('/')
            else 
                console.log(user);
                
        }
        
    },
    {
        path:'/login',
        Component: Registration,
        action:loginAction,
        loader: () => {
            const user = localStorage.getItem('user')
            if(user)
                return redirect('/')
        }
    }
    ,
    {
        path: '/movie/:id',
        Component: MovieDetail
    },
    {
        path: '/show/:id',
        Component: TVDetail
    }
 ]);
