import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="flex flex-col">
            <h1 className="text-5xl text-center">Bienvenue sur le site.</h1>
            <Link to="/cars" className="text-center text-blue-500 hover:text-blue-700 underline">Consulter toutes les voitures.</Link>

        </div>
    )
}

export default HomePage;