import React, { Component } from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import SearchForm from './components/TodoComponents/SearchForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

const data = [
  {
    name: 'laundry',
    id: 1,
    completed: false
  },
  {
    name: 'buy groceries',
    id: 2,
    completed: false
  },
  {
    name: 'wash car',
    id: 3,
    completed: false
  },
  {
    name: 'get oil change',
    id: 4,
    completed: false
  },
  {
    name: 'feed pet',
    id: 5,
    completed: false
  },
  {
    name: 'get haircut',
    id: 6,
    completed: false
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: data
    };
  }

  addItem = name => {
    const newItem = {
      name: name,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newItem]
    });
  };

  clearItem = () => {
    this.setState({
      todos: this.state.todos.filter(item => {
        return item.completed === false;
      })
    })
  };

  toggleCompleted = id => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  searchItem = (query) => {
    this.setState({
      todos: this.state.todos.filter((item) => {
        return item.name.toLowerCase().includes(query.toLowerCase())
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <TodoForm addItem={this.addItem} />
        <SearchForm searchItem={this.searchItem} />
        <TodoList toggleCompleted={this.toggleCompleted} todos={this.state.todos} clearItem={this.clearItem} />
      </div>
    );
  }
}

export default App;