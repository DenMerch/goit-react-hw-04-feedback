import { useState } from "react";
import { FeedbackOptions } from "./feedback/FeedbackOptions";
import { Section } from "./Section/Section ";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from './Notification/Notification'

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleClick = e => {
    switch (e.target.name) {
      case "good": setGood(prevState => prevState + 1)
        break;
      case 'neutral': setNeutral(prevState => prevState + 1)
        break;
      case 'bad': setBad(prevState => prevState + 1)
        break;
      default:
        break;
    }
  }
  const total = good + neutral + bad;
  const positivePercentage = Math.ceil((good / total) * 100)

  return (
    <div
      style={{
        flexDirection: "column",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section title={"Please leave feedback"}>
        <FeedbackOptions options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick} />
      </Section>
      {total ? <Section title={"Statistics"}>
        <Statistics good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage} />
      </Section>
        : <Notification message="There is no feedback" />}
    </div>
  )
}
