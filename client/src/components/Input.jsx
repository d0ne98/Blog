
export default function Input(props) {
    return (
        <div className="input-field">
            <label>{props.label || props.name}:</label>
            <input 
                name={props.name} 
                type={props.type} 
                value={props.value} 
                onChange={props.handleChange} 
                required={props.required}
                placeholder={props.placeholder}
            />
        </div>
    )
}