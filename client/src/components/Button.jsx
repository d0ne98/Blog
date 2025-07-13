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

    return <button type={props.type} onClick={props.type === "submit" ? null : handleClick}>{props.name}</button>
}