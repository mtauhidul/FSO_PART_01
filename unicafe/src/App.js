import { useEffect, useState } from 'react';

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticsLine = ({ text, statistics }) => (
  <tr>
    <td>{text}</td>
    <td>
      {statistics}
      {text === 'positive' ? '%' : null}
    </td>
  </tr>
);

const Statistics = ({ good, neutral, bad, allClicks, average, positive }) => {
  return (
    <div>
      <h1>statistics</h1>
      {allClicks !== 0 ? (
        <table>
          <tbody>
            <StatisticsLine text='good' statistics={good} />
            <StatisticsLine text='neutral' statistics={neutral} />
            <StatisticsLine text='bad' statistics={bad} />
            <StatisticsLine text='all' statistics={allClicks} />
            <StatisticsLine text='average' statistics={average} />
            <StatisticsLine text='positive' statistics={positive} />
          </tbody>
        </table>
      ) : (
        <h3>No feedback given</h3>
      )}
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAllClicks] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleGoodBtn = () => {
    setGood(good + 1);
    setTotal(total + 1);
  };

  const handleNeutralBtn = () => {
    setNeutral(neutral + 1);
    setTotal(total + 0);
  };

  const handleBadBtn = () => {
    setBad(bad + 1);
    setTotal(total - 1);
  };

  useEffect(() => {
    setAllClicks(good + neutral + bad);
    setAverage(total / allClicks);
    setPositive(good / allClicks);
  }, [allClicks, average, bad, good, neutral, total]);

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={handleGoodBtn} text='good' />
        <Button handleClick={handleNeutralBtn} text='neutral' />
        <Button handleClick={handleBadBtn} text='bad' />
      </div>
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        allClicks={allClicks}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
