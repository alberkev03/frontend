import { useState, useEffect } from "react";

async function getProyects() {
    await fetch("http://localhost:3000/api/proyects")
        .then((response) => response.json())
        .then((data) => {
            return data.payload;
        })
        .catch((error) => {
            console.error("Error fetching proyectos:", error);
        });
}
const Proyects = () => {
    const [proyects, setProyects] = useState([]);
    useEffect(() => {
        getProyects().then((data) => {
            setProyects(data);
        });
    });
    return (
        <div className="card">
            <div className="card-header">
                <h2>Proyectos</h2>
            </div>
            <div className="card-body">
                {proyects.map((proyecto, index) => (
                    <div key={index} className="proyecto-item">
                        <h3>{proyecto.name}</h3>
                        <p>{proyecto.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Proyects;
