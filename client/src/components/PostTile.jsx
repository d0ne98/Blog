import {useNavigate} from "react-router-dom";

export default function PostTile(props) {

    const navigate = useNavigate();

    function handleClick(){
        navigate(`/post/${props.id}`)
    }
    
    return(
        <div className="postTile" onClick={handleClick}>
            <h2>{props.topic}</h2>
            <h3>{props.title}</h3>
            <p>{props.summary}</p>
            <p></p>
            <h5>{props.date}<span> . </span>{props.read_time}</h5>

        </div>
    )
}