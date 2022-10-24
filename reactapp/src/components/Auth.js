import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';

function Auth() {
    return (
        <>
            <Login />
            <Signup />
        </>
    );
}

export default Auth;