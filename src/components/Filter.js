import { Button, FormControl, MenuItem, Select,InputLabel } from '@mui/material'
import React, { useState } from 'react';
import AddTask from './addTask';

export default function Filter(props){

    const [dropDownValue, setDropDownValue] = React.useState('All');
const handleChange = (event) => {
    setDropDownValue(event.target.value)
}
const [open, setOpen] = useState(false);
const onClose= () => {
    setOpen(false)
}
    return (
        <div className='headerGroup'>
            <Button variant="contained" onClick={()=>setOpen(true)}>Add Task</Button>
  <FormControl>
  <InputLabel id="demo-simple-select-label">Status</InputLabel>
  <Select
  className='dropDownSelection'
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={dropDownValue}
    label="Status"
    onChange = {handleChange}
  >
    <MenuItem value={"Incomplete"}>Incomplete</MenuItem>
    <MenuItem value={"Completed"}>Completed</MenuItem>
    <MenuItem value={"All"}>All</MenuItem>
  </Select>
  <AddTask onClose={onClose} open = {open} addToTask = {props.addToTask}></AddTask>
  </FormControl>
        </div>
    )
}