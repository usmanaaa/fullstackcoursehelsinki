import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistic = (props) => {
  const { text, value, percentage } = props

  return (
    <div>
      <p>{text} {value} {percentage}</p>
    </div>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad, average, total, posFeedback } = props

  if (total <= 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>

    )

  }

  else {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tr>
            <td><Statistic text="good " /></td>
            <td><Statistic text={good} /></td>
          </tr>
          <tr>
            <td><Statistic text="neutral " /></td>
            <td><Statistic text={neutral} /></td>
          </tr>
          <tr>
            <td><Statistic text="bad " /></td>
            <td><Statistic text={bad} /></td>
          </tr>
          <tr>
            <td><Statistic text="average " /></td>
            <td><Statistic text={average} /></td>
          </tr>
          <tr>
            <td><Statistic text="positive " /></td>
            <td><Statistic text={posFeedback} percentage='%' /></td>
          </tr>
        </table>
      </div >

    )
  }

}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = (good - bad) / total
  const posFeedback = (good / total) * 100

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        posFeedback={posFeedback} />

    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)