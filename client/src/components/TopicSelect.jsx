import axios from "axios";
import { useState, useEffect } from "react";

export default function TopicSelect(props) {
    const [topics, setTopics] = useState([]);

    useEffect(()=>{
        async function getTopics() {

            try {
                const response = await axios.get("http://localhost:3001/api/categories");
                setTopics(response.data);
                console.log(topics)
                
            } catch (err) {
                console.error(err); 
            }
        } getTopics();
    },[]);
    
    return (
        <select className="topicSelect" name={props.name} value={props.value} onChange={props.handleChange} required>
            <option value= "" > --Please choose a topic--</option>
            {topics.map((topic, index)=>{
                return <option key={topic.id} value={topic.id}>{topic.name}</option>
            })}
        </select>
    )  
}