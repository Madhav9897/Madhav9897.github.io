
import ToDoTask from './ToDoTask'
// import { getTaskData } from './taskData';
import { useCustomContext } from './store/CustomContext';

export default function ToDoList (props) {
    return (
      [...props.taskData].map((task) => {
       return  <ToDoTask task={task}/>
      })
    );
}