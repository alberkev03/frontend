const nombreTest = (regex, name, setNError) => {
    if (name.length === 0) {
        setNError("");
    } else if (name.length < 3) {
        setNError("Ingrese un mínimo de 3 caracteres");
    } else if (!regex.test(name)) {
        setNError("Solo puede ingresar letras y espacios");
    } else {
        setNError("");
    }
};

const emailTest = (regex, email, setEError) => {
    if (!regex.test(email)) {
        setEError("Utilice un correo válido");
    } else {
        setEError("");
    }
};

const disableButton = (nomError, emailError, mensaje, setActiveBtn) => {
    if (nomError === "" && emailError === "" && mensaje !== "") {
        setActiveBtn(false);
    } else {
        setActiveBtn(true);
    }
};
export { nombreTest, emailTest, disableButton };
