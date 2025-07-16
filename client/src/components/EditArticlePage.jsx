import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import TopicSelect from "./TopicSelect";

export default function EditArticlePage(props) {
    const {id} = useParams();
    const [article , setArticle] = useState({})
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    useEffect(()=>{
        async function getArticle(id) {
            setError(null);
            try {
            const response = await axios.get(`http://localhost:3001/api/article/${id}`);
            setArticle(response.data);
            } catch (err) {
                setError("Could not load the article. Please try again later.");
                console.error("Error fetching article.", err);
                
            }

        } getArticle(id)
    },[])

    async function handleSubmit(event) {
        event.preventDefault();
        setError(null);
        try {
            const response = await axios.put("http://localhost:3001/api/article/edit", article);
            navigate(`/post/${id}`);
        } catch (err) {
            setError("Could not save changes. Please try again.");
            console.error("Error saving article.", err );
            
        }
        
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
                    <label>Topic <TopicSelect name="topic" value={article.topic} handleChange={setArticleValues} /></label>
                    <Input label="Title" name="title" type="text" value={article.title} handleChange={setArticleValues} required={true} />
                    <Input label="Summary" name="summary" type="text" value={article.summary} handleChange={setArticleValues} required={true} />
                    <Input label="Date" name="date" type="text" value={article.date} handleChange={setArticleValues} required={true} />
                    <Input label="Read Time" name="read_time" type="text" value={article.read_time} handleChange={setArticleValues} required={true} />
                    <label> Full Text <textarea name="full_text" value={article.full_text} onChange={setArticleValues} placeholder="Write the article in here ..." required/></label>
                    {error && <div className="errorMsg">{error}</div>}
                    <Button name="Save" type="submit"/>
                    <Button name="Cancel" type="button" clickAction={handleCancel} />
                    </form>
        
                </div>
    )
    
}