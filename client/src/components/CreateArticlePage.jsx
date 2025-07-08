import Input from "./Input";
import { useState } from "react";
import Button from "./Button";

export default function CreateArticlePage() {
    const [article , setArtcle] = useState({
        topic: "",
        title: "",
        summary: "",
        fullText: "",
        date: "",
        readTime: ""
    });

    function handleSubmit(event) {
        event.preventDefault();
    }

    function  setArticleValues(event) {
        setArtcle((pervArticle)=> {
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
            <Input label="ReadTime" name="readTime" type="text" value={article.readTime} handleChange={setArticleValues} required={true} />
            <label> Full Text <textarea name="fullText" value={article.fullText} onChange={setArticleValues} placeholder="Write the article in here ..." required/></label>
            <Button name="Publish" type="submit"/>
            <Button name="Cancel" url="/articles" />
            </form>

        </div>
    )
    
}