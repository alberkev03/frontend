import { useState } from "react";
import SubmitImput from "./SubmitImput";
import SubmitMessage from "./SubmitMessage";
import SubmitButton from "./SubmitButton";

const publicKey = import.meta.env.PUBLIC_KEY;


function validateForm (e) {
    e.preventDefault();
    console.log(e.target);
}

const Submit = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");
    const test = (e) => {
        e.preventDefault();
        console.log(nombre, email, mensaje);
    }
    return (
        <div className="container rounded-3 m-auto p-3 shadow w-25">
            <h2>Formulario de Contacto</h2>
            <form className="form" onSubmit={test}>
                <SubmitImput text="Nombre" item={nombre} setFunction={setNombre}/>
                <SubmitImput text="Email" item={email} setFunction={setEmail}/>
                <SubmitMessage
                    text="Mensaje"
                    item={mensaje}
                    function={setMensaje}
                />
                <SubmitButton />
            </form>
        </div>
    );
};

export default Submit;
