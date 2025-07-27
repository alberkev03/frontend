const ProyectCard = ({ nombre, descripcion, url }) => (
    <div className="card card-body m-2 p-2">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
        <a href={url} className="btn btn-primary">
            Ver Proyecto
        </a>
    </div>
);

export default ProyectCard;