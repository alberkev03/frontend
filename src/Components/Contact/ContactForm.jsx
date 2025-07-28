import { useState, useEffect } from "react";
import SubmitImput from "./SubmitImput";
import SubmitMessage from "./SubmitMessage";
import SubmitButton from "./SubmitButton";
import ErrorMsg from "./ErrorMsg";
import { emailValido, soloTexto } from "../helpers/regex";
import { emailTest, nombreTest, disableButton } from "./validation";

const ContactForm = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");

    const [nomError, setNomError] = useState("");
    const [emailError, setEmailError] = useState("");

    const [activeBtn, setActiveBtn] = useState(true);

    useEffect(() => {
        const nombreError = nombreTest(soloTexto, nombre, setNomError);
        const correoError = emailTest(emailValido, email, setEmailError);
        disableButton(nomError, emailError, mensaje, setActiveBtn)
    }, [nombre, email, mensaje, nomError, emailError]);

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
                    isValid={!nomError ? "" : "is-invalid"}
                />
                <ErrorMsg message={nomError} />
                <SubmitImput
                    text="Email"
                    item={email}
                    setFunction={setEmail}
                    isValid={!emailError ? "" : "is-invalid"}
                />
                <ErrorMsg message={emailError} />
                <SubmitMessage
                    text="Mensaje"
                    item={mensaje}
                    setFunction={setMensaje}
                />
                <SubmitButton isDisabled={activeBtn} />
            </form>
        </>
    );
};

export default ContactForm;
