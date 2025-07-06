import {useNavigate} from "react-router-dom"

export default function Button(props) {

    const navigate = useNavigate();
    
    function handleClick() {
        if (props.handleClick) {
            // If handleClick prop is provided, use it
            props.handleClick();
        } else if (props.url) {
            // If url prop is provided, navigate to it
            navigate(`${props.url}`);
        }
    }

    return <button onClick={handleClick}>{props.name}</button>
}