import {useNavigate} from "react-router-dom"

export default function Button(props) {

    const navigate = useNavigate();
    
    function handleClick() {
      if(props.url){
       navigate(`${props.url}`);
      } else if(props.clickAction){
        props.clickAction();
      }
    }

    return <button onClick={handleClick}>{props.name}</button>
}