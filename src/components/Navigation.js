import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <NavLink to="/home"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/buat"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                    Buat
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/arsip"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                    Arsip
                </NavLink>
            </li>
        </ul>
    );
}

export default Navigation;