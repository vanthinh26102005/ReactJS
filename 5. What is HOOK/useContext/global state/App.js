import { useStore, action } from "./store";

function App() {
  const [state, dispatch] = useStore()
  const { todos, todoInput } = state
  //console.log(state);

  const handleAdd = () => {
      dispatch(action.addTodo(todoInput)) 
  }

  console.log(todos);

  return (
    <div>
      <input 
          value={todoInput}
          placeholder="Enter work"
          onChange={ e => {
              dispatch(action.setTodoInput(e.target.value))
          }}
      />
      <button onClick={handleAdd}> ADD </button>
      {todos.map((todo, index) => (
        <li key={index} >{todo}</li>
      ))}
    </div>
  )
}

export default App