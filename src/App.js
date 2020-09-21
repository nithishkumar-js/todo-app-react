import React,{useState,useEffect} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Todos from './Todos/Todos';
import {db} from './Todos/Database/firebase'
import firebase from 'firebase'
function App() {
  
  //useState act as Set State and also temporary storage 

  const [todos, settodos] = useState([])
  const [input, setinput] = useState("");
  // useffect return runs when the app loads (function,dependency)
  // if the array is empty it loads only once 
  
  useEffect(() => {
    
    db.collection("todos").onSnapshot( snapshot =>
      {
        settodos(snapshot.docs.map(doc =>({
          id:doc.id,todo:doc.data().todo
        })))
      })
    },[])
    
    console.log(todos)    
    const addtodos = (event) =>
    {
    // event.preventDefault() prevent refreshing when we hit submit
   event.preventDefault()
   db.collection("todos").add({
    todo: input,
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
  })
  setinput("");
  }
  return (
    <div className="App">
     <div>
       <p className="App_text">Welcome to nithish_kumar-js</p>
       <p className="App_text">todo list app</p>
       <form>
         <input type="text" value={input} onChange={event => setinput(event.target.value)} className="App_input"/>
         <Button disabled={!input} type ="Submit" onClick={addtodos}style={{marginLeft:10}}variant="contained" color="primary">
          Add
        </Button>
       </form>
       {todos.map(todo =>
       <Todos todo={todo}/>
        )}
     </div>
    </div>
  );
}

export default App;
