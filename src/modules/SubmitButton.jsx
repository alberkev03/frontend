import React from "react";
import buttonValidation from "./formValidation";

const SubmitButton = () => {
    return (
        <button type="submit" className="btn btn-primary mt-2" disabled={buttonValidation}>
            Enviar
        </button>
    );
};

export default SubmitButton;
