
//enkapsulirana labela :D  1 izvor istine! component based pristup izrade


export function InputElement({ label, type }) {
    return (
        <label>
            <div className="label">{label}</div>
            <input className="input" type={type} />
        </label>
    )
}
