import React, { useState } from "react";
import ToDoList from "./ToDoList";
import Filter from "./Filter";
import './main.css';
import CustomContext from "./store/CustomContext";
import { todoReducer } from "./store/TodoReducer";

export default function Main() {
    const Data = [
        {
            title: "Electricity Bill",
            date: new Date('March 17, 2023 03:24:00'),
            status: "Incomplete"
        },
        {
            title: "Grocery Bill",
            date: new Date('March 20, 2023 04:24:00'),
            status: "Incomplete"
        },
        {
            title: "Electricity Bill",
            date: new Date('March 17, 2023 03:24:00'),
            status: "Incomplete"
        },
        {
            title: "Grocery Bill",
            date: new Date('March 20, 2023 04:24:00'),
            status: "Incomplete"
        },
    ];

    const [taskData, setTaskData] = useState(Data);

    const addToTask = (obj) => {
        setTaskData(prev=>[...prev,obj])
    }

    return(
        <div className="mainContainer">
            <p className="headerTitle">TODO LIST</p>
            <Filter addToTask = {addToTask}></Filter>
            <div className="todoListWrapper">
            <ToDoList taskData = {taskData}></ToDoList>
            </div>
        </div>
    )
}