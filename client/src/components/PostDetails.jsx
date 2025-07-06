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
        <div className="backButtonContainer">
            <Button name="← Back to Posts" handleClick={goBack}/>
        </div>
        <div className="postHero">
            <h4>{post.topic}</h4>
            <h1>{post.title}</h1>
            <h5>{post.date}<span> . </span>{post.readTime}</h5>
        </div>
        <div className="postBody">
            <p>{post.fullText}</p>
        </div>
    </div>
    )
}