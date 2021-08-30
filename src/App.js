
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
import React, { useState } from 'react';
import { AddTodo } from './MyComponents/AddTodo';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { About } from './MyComponents/About';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    //console.log("I am onDelete of todo",todo);
    //Deleting this way in react doesnot work.
    //let index=todos.indexOf(todo);
    //todos.splice(index,1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    //  console.log("add",title,desc);
    let Sno;
    if (todos.length === 0) {
      Sno = 1;
    }
    else {
      Sno = todos[todos.length - 1].Sno + 1;
    }
    const myTodo = {
      Sno: Sno,
      Title: title,
      Description: desc
    }
    setTodos([...todos, myTodo]);
    //  console.log(myTodo);


    localStorage.setItem("todos", JSON.stringify(todos));


  }


  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <div>
      <Router>
        <Header title="My Todos List" searchBar={false} />


        <Switch>

          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

        </Switch>



        <Footer />
      </Router>
    </div>
  );
}

export default App;
