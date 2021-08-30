import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <div>
            <h5>{todo.Title}</h5>
            <p>{todo.Description}</p>
            <button class="btn btn-sm btn-danger" onClick={() => {onDelete(todo)}}>Delete</button>
        </div>
    )
}
