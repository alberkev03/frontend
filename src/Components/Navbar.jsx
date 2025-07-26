import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar navbar-light bg-light mb-4 fixed-top d-flex justify-content-end">
            <nav className="nav flex-column flex-sm-row">
                <Link to="/proyects">
                    <button className="btn btn-outline-secondary m-2">
                        Proyectos
                    </button>
                </Link>
                <Link to="/contact">
                    <button className="btn btn-primary m-2">Contáctame</button>
                </Link>
            </nav>
        </div>
    );
};

export default Navbar;
