const publicKey = import.meta.env.PUBLIC_KEY;


import ContactForm from "./ContactForm";
const Submit = () => {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="container container-sm rounded-3 p-3 shadow w-25">
                <h2>Formulario de Contacto</h2>
                    <ContactForm />
            </div>
        </div>
    );
};

export default Submit;
