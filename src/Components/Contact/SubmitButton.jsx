const SubmitButton = ({isDisabled}) => {
    return (
        <>
            <button type="submit" className="btn btn-primary mt-2" disabled={isDisabled}>
                Enviar
            </button>
        </>
    );
};

export default SubmitButton;
