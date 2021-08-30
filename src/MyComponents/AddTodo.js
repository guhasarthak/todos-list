import React,{useState} from 'react'

export const AddTodo = (props) => {
    const[title,setTitle]= useState("");
    const[Description,setDescription]= useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(title==="" || Description==="")
        {
            alert("Title or Description cannot be blank");
        }
        else
        {
            props.addTodo(title,Description);
        }
        setTitle("");
        setDescription("");
        
    }
    return (
        <div className="container my-3">
            <h4>Add a Todo</h4>
            <form onSubmit={submit}>
                <div class="form-group mb-3">
                    <label for="title">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} class="form-control" id="title" aria-describedby="emailHelp" placeholder="Todo-Title" />
                </div>
                <div class="form-group mb-3">
                    <label for="Description">Todo Description</label>
                    <input type="text" value={Description} onChange={(e)=>{setDescription(e.target.value)}}class="form-control" id="Description" placeholder="Todo-Description" />
                </div>
                
                <button type="submit" class="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
            )
}

 
