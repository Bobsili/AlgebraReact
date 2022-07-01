import "./FormMessage.css"

function FormMessage(props) {
    if (!props.visible) return null;

    return <div className="form-message">Successfully sign in!</div>
}

// function FormMessage({ visible }) {
//     if (!{ visible }) {
//         return null;
//     }
//     return <div className="form-message">Successfully sign in!</div>
// }

export default FormMessage;