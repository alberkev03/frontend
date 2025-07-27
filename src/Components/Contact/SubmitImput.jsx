import React from "react";

const SubmitImput = ({ item, text, setFunction }) => {
    return (
        <input
            type="text"
            placeholder={text}
            className="d-block my-3 form-control"
            onChange={(e) => setFunction(e.target.value)}
            required
        />
    );
};

export default SubmitImput;
