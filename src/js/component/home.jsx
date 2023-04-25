import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import "./styles.css";

const App = () => {
	const [task, setTask] = useState([]);
	const [inputVal, setInputVal] = useState('');

	const inputChangeHandle = (event) => {
		setInputVal(event.target.value);
	};

	const AddTask = () => {
		if(inputVal.trim() ==== ''){
			return;
		}
		setTask([...task, {title: inputVal.trim(), completed: false }]);
		setInputVal('');
	};
	const DeleteTask = (index) => {
		setTask(task.filter((task, i) => i !== index));
	};
	const toggleComplete = (index) => {
		setTask(
			task.map((task, i)) =>
			i === index ? {...task, completed: !task.completed} : task)
		);
	};
};

const incompleteTask = task.filter((task) => !task.completed).length;

return(
	//Div for App
	<div className="todo-app">
		<h1>todos</h1>
		<div className="todo-box">
			<input>
			type="text"
			placeholder="What needs to be done?"
			value={inputVal}
			onChange={inputChangeHandle}
			onKeyPress={(event)=> {
				if (event.key === 'Enter'){
					AddTask();
				}
			}}
			</input>
			<button onClick = {AddTask}>Add</button>
			<div className="task-list">
				{task.length === 0 ? (
					<p>No tasks, add a task</p>
					): (
					task.map((task, index) => (
						<div
							key={index}
							className={'task ${task.completed ? 'completed' : ''}'}>
								<p>{task.title}</p>
								<div className ="task-button">
									<span onClick = {() => toggleComplete(index)}>
										{task.completed ? 'Mark Incomplete' : 'Mark Complete'}
									</span>

									<span onClick = { () => DeleteTask(index)}>
										X
									</span>
								</div>
						</div>

					))
					)}

			</div>
			{task.length > 0 && (
				<p className="task-count">{incompleteTask} tasks left</p>
			)}
		</div>
	</div>
	// ^Closing Div for App (Do not delete this div, pls)
);
}

export default App;
