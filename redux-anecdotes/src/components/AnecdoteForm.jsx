import { useDispatch } from 'react-redux'
import anecdoteReducer, { addAnecdote, voteAnecdote } from '../reducers/anecdoteReducer'
import notificationReducer, { addedNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const add = (event) => {
    event.preventDefault()
    dispatch({ type: 'anecdotes/addAnecdote', payload: event.target.anecdote.value })
    dispatch({ type: 'notification/addedNotification', payload: event.target.anecdote.value })
    setTimeout(() => {
      dispatch({ type: 'notification/removeNotification', payload: '' })
    }, 5000)
  }
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={add}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm