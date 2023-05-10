import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteUser} = props
  const {title, id} = todoDetails
  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li>
      <div className="list-item">
        <p>{title}</p>
        <button type="submit" className="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
