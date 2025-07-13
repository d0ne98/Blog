import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
export default function EditArticlePage(props) {
    const {id} = useParams();
    const [article , setArticle] = useState({})
    const navigate = useNavigate();

    useEffect(()=>{
        async function getArticle(id) {
            const response = await axios.get(`http://localhost:3001/api/article/${id}`);
            setArticle(response.data);
        } getArticle(id)
    },[])

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await axios.put("http://localhost:3001/api/article/edit", article);
        navigate(`/post/${id}`);
    }

    function setArticleValues(event) {
        setArticle(pervArticle=>{
            return{
                ...pervArticle,
                [event.target.name] : event.target.value

            }
        })
    }

    function handleCancel() {
        navigate(`/post/${id}`)
    }

   

    return(
        <div className="editArticlePageMain">
                    <h1>Edit Article</h1>
                    <form onSubmit={handleSubmit}>
                    <Input label="Topic" name="topic" type="text" value={article.topic} handleChange={setArticleValues} required={true} />
                    <Input label="Title" name="title" type="text" value={article.title} handleChange={setArticleValues} required={true} />
                    <Input label="Summary" name="summary" type="text" value={article.summary} handleChange={setArticleValues} required={true} />
                    <Input label="Date" name="date" type="text" value={article.date} handleChange={setArticleValues} required={true} />
                    <Input label="ReadTime" name="readtime" type="text" value={article.readtime} handleChange={setArticleValues} required={true} />
                    <label> Full Text <textarea name="fulltext" value={article.fulltext} onChange={setArticleValues} placeholder="Write the article in here ..." required/></label>
                    <Button name="Save" type="submit"/>
                    <Button name="Cancel" type="button" clickAction={handleCancel} />
                    </form>
        
                </div>
    )
    
}