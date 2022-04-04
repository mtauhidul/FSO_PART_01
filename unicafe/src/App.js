import { useEffect, useState } from 'react';

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
    setPositive(average * good);
  }, [allClicks, average, bad, good, neutral, total]);

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={() => handleGoodBtn()}>good</button>
        <button onClick={() => handleNeutralBtn()}>neutral</button>
        <button onClick={() => handleBadBtn()}>bad</button>
      </div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {allClicks}</p>
      {average ? <p>average {average} </p> : <p>average 0 </p>}
      {positive ? <p>positive {positive} </p> : <p>positive 0 </p>}
    </div>
  );
};

export default App;
