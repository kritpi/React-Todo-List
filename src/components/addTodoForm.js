export default function AddTodoForm(props) {

    return(
        <form onSubmit={props.handleFormSubmit}>
          <h2>Add Todo</h2>
          <label htmlFor="todo">Add todo: </label>
          <input
            type="text"
            name="todo"
            placeholder="Create a new todo"
            value={props.todo}
            onChange={props.handleInputChange}
          ></input>
          <button type="submit">Add</button>
        </form>
    );
}