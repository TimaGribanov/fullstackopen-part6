import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => {
    if (state.notification !== undefined) {
      switch (state.notification.action) {
        case 'VOTE': {
          const anecdoteToShow = state.anecdotes.find(({ id }) => id === state.notification.value)
          return `You have voted for the anecdote '${anecdoteToShow.content}'`
        }
        case 'ADD':
          return `You have added the anecdote '${state.notification.value}'`
      }
    }

    return ''
  })

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (notification === '')
    return (<></>)

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification