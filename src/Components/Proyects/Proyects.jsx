import { useState, useEffect } from "react";
import ProyectCard from "./ProyectCard";

const Proyects = () => {
    const [proyects, setProyects] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/api/proyects")
            .then((res) => res.json())
            .then((data) => {
                setProyects(data.payload || []);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, []);
    if (error) {
        return (
            <div className="container">
                <h2>Error: {error}</h2>
            </div>
        );
    } else {
        return (
            <div className="container">
                <h2>Proyectos</h2>
                {proyects.map((p) => {
                    return (
                        <ProyectCard
                            key={p.nombre}
                            nombre={p.nombre}
                            descripcion={p.descripcion}
                            url={p.url}
                        />

                    );
                })}
            </div>
        );
    }
};

export default Proyects;
