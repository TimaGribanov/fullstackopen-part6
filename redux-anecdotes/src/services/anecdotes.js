import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const get = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const voteAnecdote = async (id) => {
  const current = await get(id)
  console.log(current)
  const object = { ...current, votes: current.votes + 1 }
  const response = await axios.put(`${baseUrl}/${id}`, object)
  return response.data
}

export default { getAll, createNew, voteAnecdote }