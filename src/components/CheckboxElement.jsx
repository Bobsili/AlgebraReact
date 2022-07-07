import "./CheckboxElement.css";

export function CheckboxElement(props) {
    return (
        <label key={props.value} className="checkbox-input">
            <input
                type="checkbox"
                name={props.name}
                value={props.value}
            />
            {props.label}
        </label>
    )
}