import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import './Todo.css'
import {db} from '../Todos/Database/firebase'


function Todos (props) {
  
    const [open, setOpen] = useState(false);
    const [input, setinput] = useState("")
    
    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
      };
    const UpdatehandleClose = (event) =>
    {
     db.collection("todos").doc(props.todo.id).set({todo:input},{merge:true})
        setOpen(false);
    }
      return (
        
        <div className="Todo_div">
           <ul>
            <li>{props.todo.todo}</li>
            <li className="todo_Iconbtn" onClick={handleClickOpen}><EditIcon/></li>
            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Do you want to input ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField id="outlined-basic" label="Edit" variant="outlined" value={input} placeholder={props.todo.todo} onChange={event => setinput(event.target.value)} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button  onClick={UpdatehandleClose} color="primary" autoFocus>
            Update
          </Button>
        </DialogActions>
      </Dialog>
            <li className="todo_Iconbtn" onClick={ event => db.collection("todos").doc(props.todo.id).delete()}><DeleteIcon/></li>
           </ul>
        </div>
    )
}
export default Todos
