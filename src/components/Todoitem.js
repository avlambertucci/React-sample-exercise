import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {

    getStyle = ()=>{
        return{
            backgroundColor: '#f4f4f4',
            padding: '2px',
            borderBottom: '2px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none' 
        }
    }

   

    render() {
        const {id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" name="todoscheck" onChange={this.props.markComplete.bind(this, id)} id="todoscheck"/>
                    {title} <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}>X</button></p>
            </div>
        )
    }
}
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle ={
    backgroundColor: '#ff0000',
    color: 'white',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'

}


export default Todoitem
