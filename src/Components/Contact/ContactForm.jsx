import { useState } from "react";
import SubmitImput from "./SubmitImput";
import SubmitMessage from "./SubmitMessage";
import SubmitButton from "./SubmitButton";
import ErrorMsg from "./ErrorMsg";

const ContactForm = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [error, setError] = useState("")

    const test = (e) => {
        e.preventDefault();
        console.log(nombre, email, mensaje);
    };
    
    return (
        <>
            <form className="form" onSubmit={test}>
                <SubmitImput
                    text="Nombre"
                    item={nombre}
                    setFunction={setNombre}
                />
                <SubmitImput text="Email" item={email} setFunction={setEmail} />
                <SubmitMessage
                    text="Mensaje"
                    item={mensaje}
                    setFunction={setMensaje}
                />
                <SubmitButton />
            </form>
        </>
    );
};

export default ContactForm;
