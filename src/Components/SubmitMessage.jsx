const SubmitMessage = ({ text }) => {
    return (
        <textarea
            placeholder={text}
            className="d-block my-3 form-control"
            rows="4"
        ></textarea>
    );
};
export default SubmitMessage;
