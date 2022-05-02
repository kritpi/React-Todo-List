import './css/todoItem.css'

export default function TodoItem(props){
    console.log("statussssss :",props.isCompleted);
    return(
        <ul>
        {props.todos.map((todo) => (


          <li key={todo.id}>
            <span className={props.isCompleted ? "enable" : "disable"}>{todo.text}</span>
            <button onClick={() => props.handleEditClick(todo)}>edit</button>
            <button onClick={() => props.handleDeleteClick(todo.id)}>delete</button>
            <input 
              type = "checkbox"
              onClick={props.handleCheckboxClick}
            />
          </li>
        ))}
      </ul>
    );
}
