import React from "react";

const ErrorMsg = ({ message }) => {
    if (message === "") {
        return <div class="invalid-feedback">Error, {message}</div>;
    } else {
        return null;
    }
};

export default ErrorMsg;
