import {useNavigate} from "react-router-dom"

export default function Button(props) {

    const navigate = useNavigate();
    
    function handleClick() {

       navigate(`${props.url}`);
    }

    return <button onClick={handleClick}>{props.name}</button>
}