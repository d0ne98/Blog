import axios from "axios";
import {useEffect, useState} from "react";
import PostTile from "./PostTile"



export default  function TilesContainer() {
    const [posts, setPosts] = useState([]);
    const [error, setError]= useState(null);

    useEffect(()=>{
        async function getArticles() {
            setError(null);
             try {
                const response = await axios.get("http://localhost:3001/api/article");
                setPosts(response.data);
             } catch (err) {
                setError("Could not load articles. Please refresh the page.");
                console.error("Error fetching articles.", err);
             }

             
             
        } getArticles();
    },[])

    
    return(
        <div className="tilesContainer" >
            {error && <div className="errorMsg">{error}</div>}
            {posts.map((post)=>{
               return <PostTile
                 id={post.id}
                 category={post.category}
                 title={post.title} 
                 summary={post.summary} 
                 date={post.date} 
                 readTime={post.read_time}/>
            })}
        </div>
    )
    
}