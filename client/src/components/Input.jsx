
export default function Input(props) {
    return (
        <label>
        {props.label}:
        <input name={props.name} type={props.type} value={props.value} onChange={props.handleChange} required={props.required}></input>
        </label>
    )
}