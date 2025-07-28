import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Button from "./Button";



export default function PostDetails(){

    const [post, setPost] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    useEffect(()=>{
        async function getArticles() {
            setError(null);
            try {
                const response = await axios.get(`http://localhost:3001/api/article/${id}`);
                setPost(response.data);
            } catch (err) {
                setError("Could not load the post. Please try again later.");
                console.error("Error fetching article.", err);
            }
             
        } getArticles();
    },[])

    async function OnDelete() {
            setError(null);
            try {
                const response = await axios.delete(`http://localhost:3001/api/article/delete/${id}`);
                navigate("/articles")
            } catch (err) {
                 setError("Could not load the post. Please try again later.");
                 console.error("Error deleting post.", err);
                 
            }

     }
    
    

    return(
    <div className="postDetails">
        {error && <div className="errorMsg">{error}</div>}
        <div className="backButtonContainer">
            <Button name="← Back to Posts" url="/articles"/>
        </div>
        <div className="postHero">
            <h4>{post.category}</h4>
            <h1>{post.title}</h1>
            <h5>{post.date}<span> . </span>{post.read_time} minutes</h5>
        </div>
        <div className="postBody">
            <p>{post.full_text}</p>
        </div>
        <div className="postActions">
            <Button name="Edit" url={`/article/edit/${id}`}/>
            <Button name="Delete" clickAction={OnDelete} />
        </div>
    </div>
    )
}