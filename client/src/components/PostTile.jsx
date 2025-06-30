import Button from "./Button"
export default function PostTile(props) {
    
    return(
        <div className="postTile">
            <Button name={props.topic} />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <p>{props.date}</p>
            <Button name={props.readTime}/>

        </div>
    )
}