import React from 'react';
import TaskCard from './TaskCard';


const Tasks = ({ tasks, setTasks }) => {
    const deleteTask = (index) => {
        const newArr = tasks.filter((_, i) => i !== index);
        setTasks(newArr);
    };

    return (
        <div className="tasks-container">
            <p className="note">Here are the list of tasks:</p>
            <div className="main-section">
               {
                tasks.map((task, index) => (
                    <TaskCard 
                        key={index} 
                        title={task.title} 
                        description={task.description} 
                        priority={task.priority} 
                        index={index} 
                        deleteTask={deleteTask} 
                    />
                ))
               }
            </div>
        </div>
    );
};

export default Tasks;
