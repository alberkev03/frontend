import { useState, useEffect } from "react";

const Proyects = () => {
    const [proyects, setProyects] = useState([]);
    const [error, setError] = useState(null)

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
        return <div className="container"><h2>Error: {error}</h2></div>;
    }
    return (
        <div className="container">
            <h2>Proyectos</h2>
            {proyects.map((p) => {
                return (
                    <div className="card card-body m-5 p-2" key={p.nombre}>
                        <h5 className="card-title">{p.nombre}</h5>
                        <p className="card-text">{p.descripcion}</p>
                        <a href={p.url} className="btn btn-primary">
                            Ver Proyecto
                        </a>
                    </div>
                );
            })}
        </div>
    );
};

export default Proyects;
