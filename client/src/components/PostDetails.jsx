import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Button from "./Button";



export default function PostDetails(){

    const [post, setPost] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        async function getArticles() {
             const response = await axios.get(`http://localhost:3001/api/article/${id}`);
             setPost(response.data);
        } getArticles();
    },[])
    

    return(
    <div className="postDetails">
        <div className="backButtonContainer">
            <Button name="← Back to Posts" url="/articles"/>
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