export default function TodoItem(props){

    return(
        <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => props.handleEditClick(todo)}>edit</button>
            <button onClick={() => props.handleDeleteClick(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    );
}
