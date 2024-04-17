import { useDispatch } from 'react-redux'
import filterReducer, { setFilter, showAll } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    if (event.target.value !== '')
      dispatch({ type: 'filter/setFilter', payload: event.target.value })
    else
      dispatch({ type: 'filter/showAll', payload: '' })
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter