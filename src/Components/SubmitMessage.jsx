const SubmitMessage = ({ text, setFunction }) => {
    return (
        <textarea
            placeholder={text}
            className="d-block my-3 form-control"
            rows="4"
            onChange={e=>setFunction(e.target.value)}
            required
        ></textarea>
    );
};
export default SubmitMessage;
