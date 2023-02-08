import './App.css';
import {  useState } from 'react';
import AddTodo from './myTodo/addTodo/AddTodo.jsx';
import TodoList from './myTodo/todoList/TodoList.jsx';
import TodoFooter from './myTodo/todoFooter/TodoFooter.jsx';
// import Block from './Currencies/block';





export default function App() {
  const[value,setValue] = useState('');
  const[todos,setTodos] = useState([
    {
      id: Math.random(),
      text: 'HTML',
      isCompleted: false
    },
    {
      id: Math.random(),
      text: 'CSS',
      isCompleted: false
    },
    {
      id: Math.random(),
      text: 'JAVASCRIPT',
      isCompleted: false
    }, 
    {
      id: Math.random(),
      text: 'REACT',
      isCompleted: false
    }
  ]);
  function onAdd(newText){
    setTodos(([
      ...todos,
      {
        id: Math.random(),
        text: newText,
        isCompleted: false
      }
    ]));
  }
  function onDelete(id){
    setTodos(todos.filter(todo=>todo.id !==id));
  }
  function onChange(newTodo){
    setTodos(todos.map((todo)=>{
      if(todo.id === newTodo.id){
        return newTodo;
      } return todo;
    }));
  }
  function onClearChecked(){
    setTodos(todos.filter(todo=>!todo.isCompleted));
  }
 
  return (
    <div className="todoList">
      <h1>Todo list</h1>
      <AddTodo todos={todos} setTodos={setTodos} value={value} setValue={setValue} onAdd={onAdd}/>
      <TodoList todos={todos} setTodos={setTodos} onDelete={onDelete} onChange={onChange}/>
      <TodoFooter todos={todos} setTodos={setTodos} onClearChecked={onClearChecked}/>
    </div>
  );
}



























// function reducer(state,action){
//   if(action.type ==='arm'){
//     return [
//       ...state,
//       state.mult ===1
//     ]
//   } else if(action.type ==='ru'){
//     return [
//       ...state,
//       state.mult ===6
//     ]
//   } else if(action.type ==='us'){
//     return [
//       ...state,
//       state.mult ===400
//     ]
//   }
//   else if(action.type ==='eu'){
//     return [
//       ...state,
//       state.mult ===440
//     ]
//   }
// }

// export default function App() {
//   const[value, setValue] = useState('');
//  const[x,dispatch] useReducer(reducer,)
//  let mult= 1;
//   return(
//     <div>
//       <Block value={value} mult={mult} onChange={(e)=>{
//         setValue(e.target.value) dispatch={dispatch};
//       }}/> 
//       <span>ARM:{mult*value}</span>  
//     </div>
//   );

// };




