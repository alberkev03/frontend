import { useState } from "react";
import SubmitImput from "./SubmitImput";
import SubmitMessage from "./SubmitMessage";
import SubmitButton from "./SubmitButton";

const publicKey = import.meta.env.PUBLIC_KEY;

const Submit = () => {
    return (
        <div className="container rounded-3 m-auto p-3 shadow w-25">
            <h2>Formulario de Contacto</h2>
            <form className="form"> {/* Pending: working email send */}
                <SubmitImput item="Nombre" />
                <SubmitImput item="Email" />
                <SubmitMessage item="Mensaje" />
                <SubmitButton />
            </form>
        </div>
    );
};

export default Submit;
