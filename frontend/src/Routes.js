import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Profile from './components/profile/Profile'
import Pomodoro from './components/pomodoro/pomodoro'


export default () => {
    return (
        <Routes>
            <Route exact path='/' element={<Login />}>
            </Route>
            <Route exact path="/pomodoro" element={<Pomodoro />}>
            </Route>
            <Route exact path="/profile" element={<Profile />}>
            </Route>

        </Routes>
    )
} 