import PostTile from "./PostTile"
import posts from "./posts"

export default function TilesContainer() {
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