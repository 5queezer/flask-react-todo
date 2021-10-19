import React, {useState, useEffect} from 'react';
import {Card} from '../Card/card';
import {Form} from '../Form/form';

export const TodoPage = () => {
    const [todos, setTodos] = useState([])
    const [addTodo, setAddTodo] = useState('')

    useEffect(() => {
            fetch('/api').then(response => {
                if (response.ok) {
                    return response.json()
                }
            }).then(data => setTodos(data))
        }, []
    )

    const handleFormChange = (inputValue) => {
        setAddTodo(inputValue)
    }

    const handleFormSubmit = () => {
        fetch('/api/create', {
            method: 'POST',
            body: JSON.stringify({
                content: addTodo
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then(response => response.json())
            .then(message => {
                console.log(message)
                setAddTodo('')
                getLatestTodos()
            })
    }

    const getLatestTodos = () => {
        fetch('/api').then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then(data => setTodos(data))
    }

    return (
        <>
            <Form userInput={addTodo} onFormChange={handleFormChange} onFormSubmit={handleFormSubmit}></Form>
            <Card listOfTodos={todos}/>
        </>
    )
}