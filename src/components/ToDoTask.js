import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function ToDoItem (props) {
    return(
          <div className="todoListItem">
            <Checkbox   sx={{ '& .MuiSvgIcon-root': { fontSize: 36 } }}/>
            <div className='taskInfo'>
            <span className='taskTitle'>{props.task.title}</span>
            <span className='dateTime'>{`${props.task.date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}, ${props.task.date.getDate()}/${props.task.date.getMonth()}/${props.task.date.getFullYear()}`}</span>
            </div>
            <DeleteIcon className='deleteTask'></DeleteIcon>
            <EditIcon className='deleteTask'></EditIcon>
          </div>
    )
}