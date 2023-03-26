import { Component } from "react";
import { FeedbackOptions } from "./feedback/FeedbackOptions";
import { Section } from "./Section/Section ";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from './Notification/Notification'



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  handleClick = e => {
    this.setState(prevState => { return { [e.target.name]: prevState[e.target.name] + 1 } });

  }
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage()
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
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClick} />
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
    );
  };
}
