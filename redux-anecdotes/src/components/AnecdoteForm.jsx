import { useDispatch } from 'react-redux'
import anecdoteReducer, { addAnecdote, voteAnecdote } from '../reducers/anecdoteReducer'
import notificationReducer, { addedNotification, removeNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const add = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({ type: 'anecdotes/addAnecdote', payload: newAnecdote })
    dispatch({ type: 'notification/addedNotification', payload: newAnecdote.content })
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