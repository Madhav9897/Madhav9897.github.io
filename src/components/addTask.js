import { Button, Dialog, DialogContent, DialogTitle, FormControl, InputLabel, TextField } from "@mui/material";
import { useState } from "react";

export default function AddTask(props){
    const {onClose,open,addToTask} = props;
    const [value,setValue] = useState("")
    const handleAddTask = ()=>{
        console.log(value);
      const obj = {
      title: value,
      date: new Date(),
      status: "Incomplete"
    };
    props.addToTask(obj)
  }
    
    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>Add Task</DialogTitle>
            <DialogContent>
                <TextField
                onChange={(e)=>setValue(e.target.value)}
                id="title"
                label="Title"
                type="text"
                variant="standard"
                value={value}
                >
                </TextField>
                <Button variant="contained" onClick={handleAddTask}>Add</Button>
            </DialogContent>
        </Dialog>
    )
}