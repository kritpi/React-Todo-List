import { useState, useEffect } from "react";
import "./App.css";

import TodoItem from "./components/todoItem";
import AddTodoForm from "./components/addTodoForm";
import EditTodo from './components/editTodo'

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos"); //saved todos in key "todos" in savedTodos variable
    if (savedTodos) {
      //checked if savedTodos have data or not
      return JSON.parse(savedTodos); //if yes, convert str to js obj
    } else {
      return [];
    }
  }); //เก็บ list ในรูปแบบ array
  const [todo, setTodo] = useState("");
  
  const [isEditing, setIsEditing] = useState(false); // boolean state to know if we are editing
  const [currentTodo, setCurrentTodo] = useState({}); // object state to set so we know which todo item we are editing

  const [isCompleted, setIsCompleted] = useState(false) //completed status check 

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); //The browser storage only accepts data-type strings. So, for values of different data types like the object or array, we must convert it to a JSON string
  }, [todos]); //redo useEffect after todos has been changed

  function handleInputChange(e) {
    //when form change set data in setTodo เข้าถึง value ของฟอร์ม
    setTodo(e.target.value);
  }

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (todo !== "") {
      setTodos([
        ...todos, //เอา todos มาโชว์ แล้วเอาตัวใหม่มาต่อ
        {
          id : todos.length + 1, //กำหนด id
          text : todo.trim(), //ตัด space
          completed : isCompleted, //เช็คว่าทำเสร็จรึยัง deafult : false
        },
      ]);
    }
    setTodo("");
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();
    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }

  function handleEditClick(todo) {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }

  function handleCheckboxClick() {
    setIsCompleted(!isCompleted)
      const saveCompleted = isCompleted
  }
  
  return (
    <div className="App">
      <h1>Todo List React</h1>

      {isEditing ? (
          <EditTodo
            handleEditFormSubmit = {handleEditFormSubmit}
            currentTodo = {currentTodo}
            handleEditInputChange = {handleEditInputChange}
            setIsEditing = {setIsEditing}
          />
      ) : (
        <AddTodoForm
          todos={todos}
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
        />
      )}
      <TodoItem
        todos={todos}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
        handleCheckboxClick = {handleCheckboxClick}
        isCompleted = {isCompleted}
      />
    </div>
  );
}

export default App;
