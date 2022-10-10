import {Component} from 'react'

import './index.css'

class TodoItem extends Component {
  render() {
    const {todo, deleteTodo} = this.props
    const {title, id} = todo
    const onDelete = () => {
      deleteTodo(id)
    }
    return (
      <li className="todo-container">
        <p className="todo">{title}</p>
        <button className="button" type="button" onClick={onDelete}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
