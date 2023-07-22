import { useState } from "react";



export const getTaskData = () => {
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
    
    const [taskData, setTaskData] = useState(Data)
    return {taskData, setTaskData};
}
