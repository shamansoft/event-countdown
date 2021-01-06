import {getStatus} from './eventCountdown/plukService.js'
import './App.css';

function App() {
  const pStatus = getStatus(new Date());
  const message = "Next Pluk Date is " + pStatus.startDate ;
  const message2 = "Starts in " +  pStatus.daysLeft + " days";
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {message}
        </p>
        <p>
          {message2}
        </p>
      </header>
    </div>
  );
}

export default App;
