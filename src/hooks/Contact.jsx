import { useState, useEffect } from "react";
import { emailValido, soloTexto } from "../Components/helpers/regex";
import { emailValidation, nombreValidation, disableButton } from "../Components/helpers/validation";

export function useContactForm() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [nomError, setNomError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [activeBtn, setActiveBtn] = useState(true);

    useEffect(() => {
        nombreValidation(soloTexto, nombre, setNomError);
        emailValidation(emailValido, email, setEmailError);
        disableButton(nomError, emailError, mensaje, setActiveBtn);
    }, [nombre, email, mensaje, nomError, emailError]);

    return {
        nombre, setNombre, nomError,
        email, setEmail, emailError,
        mensaje, setMensaje,
        activeBtn, setActiveBtn
    };
}