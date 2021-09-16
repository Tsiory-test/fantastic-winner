import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import ProfilBarComponent from './ProfilBar.component';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="font-sans flex flex-row text-center text-white py-4 px-6 bg-blue-900 shadow w-full">
                <div className="mb-2 sm:mb-0">
                    <Link to="/" className="text-2xl no-underline text-grey-darkest hover:underline hover:text-gray-400">App </Link>
                </div>
                <div className="mx-auto">
                    <Link to="/cars" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 hover:underline hover:text-gray-400">Toutes les voitures </Link>
                    <Link to="/add-car" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 hover:underline hover:text-gray-400">Ajouter une voiture</Link>
                </div>
                <ProfilBarComponent />
            </nav>
        )
    }
}
