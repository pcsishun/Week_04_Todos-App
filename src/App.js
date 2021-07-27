import React, {useState} from 'react'
 


const FromInput = (props) => {
   const [todo, setTodo] = useState("");
   return(
     <>
      <form onSubmit= {(e)=>  {
        e.preventDefault();
        console.log(`Submit: ${todo}`);
        props.onTodoSubmit(todo);
        setTodo("");
      }}>
        <input
          id="todo-input"
          type="text"
          onChange={(e)=> setTodo(e.currentTarget.value)}
        />
        <button >+</button>

      </form>
     </>
   )
}


const Todo = (props) => {
  console.log(props)
  return(
    <div style={{display: 'flex'}}>
      <li>{props.createTodo}</li>
      <button        
        type="submit"
        onClick={() => props.onFinish({ todo:props.createTodo, date:props.date })}
        >{'\u2713'}</button>
    </div>

  )
}
 
function App() {

  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <h1>Todo</h1>
      <ul>
        {todos.map(todo =>  <Todo 
                              createTodo={todo.title} 
                              date={todo.date}
                              onFinish={(e) => setTodos(todos.filter(todo => todo.date !== e.date))   }/> )}
      </ul>

      <FromInput onTodoSubmit={(todo) => {
        console.log(`todo: ${todo}`);
        setTodos([...todos, {date:Date.now(), title: todo}]) //  เอาตัวหน้า ตั้ง เเละเพิ่มตัวหลัง
        
        }}/>
    </div>
  );
}



export default App;
