import { useEffect, useState } from "react";
import SubmitImput from "./SubmitImput";
import SubmitMessage from "./SubmitMessage";
import SubmitButton from "./SubmitButton";
import ErrorMsg from "./ErrorMsg";

const publicKey = import.meta.env.PUBLIC_KEY;

const Submit = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");

    

    const test = (e) => {
        e.preventDefault();
        console.log(nombre, email, mensaje);
    };
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="container container-sm rounded-3 p-3 shadow w-25">
                <h2>Formulario de Contacto</h2>
                <form className="form" onSubmit={test}>
                    <SubmitImput
                        text="Nombre"
                        item={nombre}
                        setFunction={setNombre}
                    />
                    <ErrorMsg/>
                    <SubmitImput
                        text="Email"
                        item={email}
                        setFunction={setEmail}
                    />
                    <ErrorMsg/>
                    <SubmitMessage
                        text="Mensaje"
                        item={mensaje}
                        setFunction={setMensaje}
                    />
                    <ErrorMsg/>
                    <SubmitButton />
                </form>
            </div>
        </div>
    );
};

export default Submit;
