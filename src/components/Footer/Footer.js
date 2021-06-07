import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-info position-static">
            <nav class="nav nav-pills flex-column flex-sm-row p-5">
                <NavLink className="flex-sm-fill text-sm-center nav-link active p-2 m-2" to="/home">
                    Home
                </NavLink>
                <NavLink className="flex-sm-fill text-sm-center nav-link active p-2 m-2" to="/home/favorites">
                    Favorites
                </NavLink>
            </nav>

        </div>
    );
};

export default Footer;