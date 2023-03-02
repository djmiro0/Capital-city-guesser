
export default function Todo({item}) {
  return (
    <div className='todo-item'>
        <p><b>Todo Item:</b> {item.text}</p>
        <p><b>Created On:</b> {new Date(item.createdOn).toLocaleString()}</p>
        <p><b>Status:</b> {item.done ? 'Done' : 'In progress...'}</p>
    </div>
  )
}
