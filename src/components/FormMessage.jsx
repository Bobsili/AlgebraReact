import "./FormMessage.css"

function FormMessage(props) {
    if (!props.visible) {
        return null;
    }
    return <div className="form-error">Successfully sign in!</div>
}

export default FormMessage;