import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Button from "./Button";



export default function PostDetails(){

    const [post, setPost] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        async function getArticles() {
             const response = await axios.get(`http://localhost:3001/api/article/${id}`);
             setPost(response.data);
        } getArticles();
    },[])

    async function OnDelete() {
            const response = await axios.delete(`http://localhost:3001/api/article/delete/${id}`);
            navigate("/articles")
     }
    
    

    return(
    <div className="postDetails">
        <div className="backButtonContainer">
            <Button name="← Back to Posts" url="/articles"/>
        </div>
        <div className="postHero">
            <h4>{post.topic}</h4>
            <h1>{post.title}</h1>
            <h5>{post.date}<span> . </span>{post.readtime} minutes</h5>
        </div>
        <div className="postBody">
            <p>{post.fulltext}</p>
        </div>
        <div className="postActions">
            <Button name="Edit" url={`/article/edit/${id}`}/>
            <Button name="Delete" clickAction={OnDelete} />
        </div>
    </div>
    )
}