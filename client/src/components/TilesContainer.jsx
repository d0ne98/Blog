import axios from "axios";
import {useEffect, useState} from "react";
import PostTile from "./PostTile"



export default  function TilesContainer() {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        async function getArticles() {
             const response = await axios.get("http://localhost:3001/api/articles");
             setPosts(response.data);
        } getArticles();
    },[])

    
    return(
        <div className="tilesContainer" >
            {posts.map((post)=>{
               return <PostTile
                 id={post.id}
                 topic={post.topic}
                 title={post.title} 
                 summary={post.summary} 
                 date={post.date} 
                 readTime={post.readTime}/>
            })}
        </div>
    )
    
}