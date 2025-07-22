import React from "react";

const SubmitImput = ({ item }) => {
    return (
        <input
            type="text"
            placeholder={item}
            className="d-block my-3 form-control"
        />
    );
};

export default SubmitImput;
