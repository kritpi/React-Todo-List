export default function EditTodo (props) {
    return(
        <form onSubmit={props.handleEditFormSubmit}>
          <h3>Edit todo list</h3>
          <label htmlFor="editTodo">Edit Todo:</label>
          <input
            type="text"
            name="editTodo"
            placeholder="Edit Todo List"
            value={props.currentTodo.text}
            onChange={props.handleEditInputChange}
          ></input>
          <button type="submit">Update</button>
          <button onClick={() => props.setIsEditing(false)}>Cancel</button>
        </form>
    );
}