import React from "react";

const SubmitImput = ({ text, setFunction, isValid }) => {
    return (
        <input
            type="text"
            placeholder={text}
            className={`d-block mt-3 form-control ${isValid}`}
            onChange={(e) => setFunction(e.target.value)}
            required
        />
    );
};

export default SubmitImput;
