import React, {useState, useEffect} from "react";
import { Delete } from "../Delete/delete"
import {
    Link,
    useParams
} from "react-router-dom";

export const Show = () => {
    const { id } = useParams()
    const [todo, setTodo] = useState([])

    useEffect(() => {
        fetch(`/api/${id}`).then(response => response.json())
            .then(data => setTodo(data))
    }, [id])

    return(
        <div>
            {todo.length > 0 && todo.map(data => <div>{data.content}</div>)}
            <Delete id={id}></Delete>
            <hr/>
            <Link to='/'>Back to ToDos</Link>
        </div>
    )
}