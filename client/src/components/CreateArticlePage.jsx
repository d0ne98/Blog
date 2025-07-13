import axios from "axios";
import Input from "./Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function CreateArticlePage() {
    const navigate = useNavigate();
    const [article , setArticle] = useState({
        topic: "",
        title: "",
        summary: "",
        full_text: "",
        date: "",
        read_time: ""
    });

   async function handleSubmit(event) {
        event.preventDefault();
        const response = await axios.post("http://localhost:3001/api/articles/create", article);
        const postId = response.data.id;
        navigate(`/post/${postId}`)
    }

    function  setArticleValues(event) {
        setArticle((pervArticle)=> {
            return {
                ...pervArticle,
                [event.target.name] : event.target.value
            }   
        })
    }

    return(
        <div className="createArticlePageMain">
            <h1>Create New Article</h1>
            <form onSubmit={handleSubmit}>
            <Input label="Topic" name="topic" type="text" value={article.topic} handleChange={setArticleValues} required={true} />
            <Input label="Title" name="title" type="text" value={article.title} handleChange={setArticleValues} required={true} />
            <Input label="Summary" name="summary" type="text" value={article.summary} handleChange={setArticleValues} required={true} />
            <Input label="Date" name="date" type="text" value={article.date} handleChange={setArticleValues} required={true} />
            <Input label="Read Time" name="read_time" type="text" value={article.read_time} handleChange={setArticleValues} required={true} />
            <label> Full Text <textarea name="full_text" value={article.full_text} onChange={setArticleValues} placeholder="Write the article in here ..." required/></label>
            <Button name="Publish" type="submit"/>
            <Button name="Cancel" url="/articles" />
            </form>

        </div>
    )
    
}