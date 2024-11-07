import React, { useEffect, useState } from 'react';
import Tasks from './Tasks';

const Home = () => {
    const initialArr = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
    const [tasks, setTasks] = useState(initialArr);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("low");

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    
    const submitHandler = (e) => {
        e.preventDefault();
        if (title) {
            setTasks([...tasks, { title, description, priority }]);
            setTitle("");
            setDescription("");
            setPriority("low");
        } else {
            alert("Title can't be empty!");
        }
    };

    return (
        <div className="container">
            <form className="form" onSubmit={submitHandler}>
                <p className="heading">Another thing in Mind!?💡🌟 Add here... ✍🏻</p>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Title of the task"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea 
                    className="textarea" 
                    placeholder="Description of the task"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <select 
                    className="priority-select" 
                    value={priority} 
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
                <button className="button" type="submit">Add</button>
            </form>
            <Tasks tasks={tasks} setTasks={setTasks} />
        </div>
    );
};

export default Home;
