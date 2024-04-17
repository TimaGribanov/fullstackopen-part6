import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import notificationReducer, { votedNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    console.log(state)
    if (state.filter === 'ALL')
      return [...state.anecdotes].sort((a, b) => b.votes - a.votes)
    return [...state.anecdotes.filter(anecdote =>
      anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))].sort((a, b) => b.votes - a.votes)
  })

  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch({ type: 'anecdotes/voteAnecdote', payload: id })
    dispatch({ type: 'notification/votedNotification', payload: id })
    setTimeout(() => {
      dispatch({ type: 'notification/removeNotification', payload: '' })
    }, 5000)
    
  }

  return (
    <>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList