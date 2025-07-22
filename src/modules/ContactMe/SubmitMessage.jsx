const SubmitMessage = ({ item }) => {
    return (
        <textarea
            placeholder={item}
            className="d-block my-3 form-control"
            rows="4"
        ></textarea>
    );
};
export default SubmitMessage;
