import React from 'react';

const TaskCard = ({ title, description, priority, index, deleteTask }) => {
    const borderColor = {
        low: "green",
        medium: "orange",
        high: "red"
    };

    return (
        <div className="task" style={{ borderColor: borderColor[priority], borderWidth: "3px" }}>
            <div>
                <p>{title}</p>
                <span>{description}</span>
            </div>
            <button className="button" onClick={() => deleteTask(index)}>−</button>
        </div>
    );
};

export default TaskCard;
