import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar-sm navbar-light bg-light fixed-top">
            <nav className="nav flex-column flex-sm-row  d-flex justify-content-between">
                <div>
                    <Link to="/">
                        <button className="btn btn-outline-primary m-2">
                            Inicio
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/proyects">
                        <button className="btn btn-outline-secondary m-2">
                            Proyectos
                        </button>
                    </Link>
                    <Link to="/contact">
                        <button className="btn btn-primary m-2">
                            Contáctame
                        </button>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
