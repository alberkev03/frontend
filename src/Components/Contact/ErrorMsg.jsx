import React from "react";

const ErrorMsg = ({ message }) => {
    if (!message) return null;
    return <div className="invalid-feedback">{message}</div>;
};
export default ErrorMsg;
