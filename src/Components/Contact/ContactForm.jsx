import { useContactForm } from "../../hooks/Contact";
import SubmitImput from "./SubmitImput";
import SubmitMessage from "./SubmitMessage";
import SubmitButton from "./SubmitButton";
import ErrorMsg from "./ErrorMsg";

const ContactForm = () => {
    const {
        nombre, setNombre, nomError,
        email, setEmail, emailError,
        mensaje, setMensaje,
        activeBtn
    } = useContactForm();

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
