import React, {Component} from 'react';
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import SearchBar from "./components/SearchBar";
import { v4 as uuidv4 } from 'uuid';

import './App.css'
export default class App extends Component {
 

  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Make the dinner',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Take children to school',
        completed: false
      }
    ]
  }

  // Toggle complete
  markComplete = (id)=> {
    console.log(id)
    this.setState({todos: this.state.todos.map(todo=>{
      if(id === todo.id){
        todo.completed = !todo.completed
      }
      return todo
    }) });
  }
  deleteTodo = (id)=>{
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}) 
  }

  searchBar = (title)=>{
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false

    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render(){
    console.log(this.state.todos)
    return (
      
      <div className="App">
        <div className="container">
          <Header />
          <SearchBar searchBar={this.searchBar}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
        </div>
       
      </div>
    );
  }

}



