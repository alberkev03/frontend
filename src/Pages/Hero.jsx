import React from "react";
import profile from "../assets/profile.jpg";

const Hero = () => {
    return (
        <>
            <main>
                <div className="row m-2 container w-50 m-auto">
                    <div className="col d-flex align-items-center justify-content-center vh-100">
                        <div>
                            <h1 className="py-3">
                                Soy Kevin Alberto
                            </h1>
                            <h2 className="py-3">
                                Desarrollador web full stack
                                -React, Node, Express, Bootstrap-
                            </h2>
                        </div>
                    </div>
                    <img
                        src={profile}
                        className="row d-flex img-thumbail w-25 m-auto"
                        alt="stock profile pic"
                    />
                </div>
            </main>
        </>
    );
};

export default Hero;
