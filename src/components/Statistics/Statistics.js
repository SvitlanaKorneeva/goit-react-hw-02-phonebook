import React from "react";
import s from "./Statistics.module.css";

const Statistics = ( {good, neutral, bad, total, positivePercentage}) => {
  return (
  <div>
      {/* <h2>Please leave feedback</h2>
      <div className={s.buttons}>
        <button type="button" onClick={this.handleGood }>Good</button>
        <button type="button" onClick={this.handleNeutral}>Neutral</button>
        <button type="button" onClick={this.handleBad }>Bad</button>
      </div>
      <h2>Statistics</h2> */}
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}  </p>
        <p>Bad: {bad} </p>
        <p>Total: {total} </p>
        <p>Positive feedback: {positivePercentage} %</p>
      </div>
    </div>
  );
  
}
  
export default Statistics;