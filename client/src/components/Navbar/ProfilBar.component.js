import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import './ProfilBar.style.scss';


const ProfilBar = () => {

    return (
        <div className="profil-bar">
            <NavLink to="/signin">
                <div className="h-full w-full flex items-center cursor-pointer hover:underline hover:text-gray-400" >
                    <CgProfile /> &nbsp;
                    Se connecter
                </div>
            </NavLink>
        </div>
    )
}


export default ProfilBar;