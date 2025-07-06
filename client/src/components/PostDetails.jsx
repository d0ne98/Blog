import {useParams, useNavigate} from "react-router-dom";
import Button from "./Button";
import posts from "./posts";


export default function PostDetails(){


    const navigate = useNavigate();
    function goBack() {
        navigate(-1);
    }
    const {id} = useParams();
    const post = posts.find(post => post.id === parseInt(id));

    return(
    <div className="postDetails">
        <h4>{post.topic}</h4>
        <Button name="<-- Back to posts" handleClick={goBack}/>
        <h3>{post.title}</h3>
        <h5>{post.date}<span> . </span>{post.readTime}</h5>
        <p>{post.fullText}</p>
    </div>
    )
}