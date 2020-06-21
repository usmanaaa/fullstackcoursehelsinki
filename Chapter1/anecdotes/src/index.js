import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// const Button = (props) => {
//   <button onClick={props.handleClick}>
//     {props.text}
//   </button>
// }

// const handleVoteClick = (arr, selected) => {
//   // get arr[selected] and increase it by one every time u click it
//   const copy = { ...arr }
//   copy[selected] += 1
//   return copy
// }

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(6 + 1).join('0').split('').map(parseFloat))

  const getRandom = () => {
    return ((0 + ((Math.random()) * (6))))
  }


  const handleVoteClick = (selected) => {
    const increaseVote = () => {
      const copy = [...votes]
      copy[selected] += 1
      return copy
    }

    setVotes(increaseVote(votes))
  }



  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={() => handleVoteClick(selected)}>vote</button>
      <button onClick={() => {
        const random = Math.floor(getRandom())
        setSelected(random)
      }
      }>next anecdote</button>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)