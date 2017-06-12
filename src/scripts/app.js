import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: ["Buy Milk", "Buy Cheese"],
			todo: ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.addTodo = this.addTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
	}

	handleChange(e) {
		this.setState({
			todo: e.target.value
			// [e.target.name]: e.target.value
		});
	}

	addTodo(e){
		e.preventDefault();
		const todoState = Array.from(this.state.todos);
		// console.log(this.state.todo)
		todoState.push(this.state.todo);
		this.setState({
			todos: todoState,
			todo: ""
		})
	}

	removeTodo(index){
		const todoState = Array.from(this.state.todos);
		todoState.splice(index,1);
		this.setState({
			todos: todoState
		});
	}

    render() {
      return (
        <div>
        	<header>
        		<h1>TODOS</h1>
        	</header>
        	<form onSubmit={this.addTodo}>
        		<input type="text" name="todo"  value={this.state.todo}  onChange={this.handleChange} />
        		<button>Add ToDo</button>
        	</form>
        	<ul>
        		{this.state.todos.map((todo,i) => {
        			return <TodoItem data={todo} key={`todo-${i}`} remove={this.removeTodo} todoIndex={i} />
        		})}
        	</ul>
        </div>
      )
    }
}

const TodoItem = (props) => {
	return (
	 <li>{props.data} <button onClick={() => props.remove(props.todoIndex)}>Remove</button></li>
	);
};

// class TodoItem extends React.Component {
// 	render() {
// 	return (
// 	 <li>{this.props.data} <button onClick={() => this.props.remove(this.props.todoIndex)}>❌</button></li>
// 	);
// 	}
// };


// ------------Getting the date for laterrrr-----------------//
// const net = require('net');
// var portNum =process.argv[2];
// var currentDate;
// var currentYear;
// var currentMonth;
// var currentDay;
// var currentDatePrint
//
//
//
// var server = net.createServer(function listener(socket) {
//
// 	currentDate = new Date();
// 	currentYear = currentDate.getFullYear().toString()
// 	currentMonth = (currentDate.getMonth() +1).toString()
// 	if (currentMonth.length <2) {
// 		currentMonth  = 0+ currentMonth;
// 	}
//
// 	currentDay = currentDate.getDate().toString()
// 	if (currentDay.length <2) {
// 		currentDay  = 0+ currentDay;
// 	}
//
// 	currentHours = currentDate.getHours().toString()
// 	currentMinutes = currentDate.getMinutes().toString()
//
//
//
// 	currentDatePrint = currentYear +"-"+ currentMonth +"-"+ currentDay +" "+ currentHours +":"+ currentMinutes + "\n";
// 	socket.write(currentDatePrint)
//
//
// 	socket.end()
// 	socket.pipe(socket);
// })
//
// server.listen(portNum, function() {
// 	// console.log('listening')
// });

//  -------------------------------------------//

ReactDOM.render(<App />, document.getElementById('app'));
