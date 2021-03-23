import React, { Component } from "react";
import "./App.css";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  // handleGood = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good +1,

  //   }))
  // };
  // handleNeutral = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral +1,

  //   }))
  // };
  
  // handleBad = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad +1,

  //   }))
  // };
  onLeaveFeedback = (e) => {
    const name = e.target.name;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1
    }));
  };
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  
  countPositiveFeedbackPercentage = () => {
    const result = this.countTotalFeedback();
    const { good } = this.state;
    const percentage = (good * 100) / result;
    return Math.round(percentage);
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
  
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        <Section title="Statistics" >

          {total === 0 ? (<Notification message="No feedback given" />) : 

          (<Statistics
      
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
              positivePercentage={positivePercentage} />
    )}
          
        </Section>
      </div>
    );
  }
}

  
export default App;
