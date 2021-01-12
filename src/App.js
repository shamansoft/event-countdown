import {getStatus} from './eventCountdown/plukService.js'
import './App.css';

function WaitForP(pStatus) {
  return (
    <header className="App-header">
      <p>
        Плюк будет {pStatus.startDate.toLocaleString("ru-ru", {timeZone: "Europe/Samara"})}
      </p>
      <p>
        Ждать осталось {pStatus.daysLeft} {pStatus.ruDays}
      </p>        
      <p>
        {pStatus.daysLeft.toString(2)}/bin | {pStatus.daysLeft.toString(16)}/hex
      </p>        
    </header>
  )
}

function GoForP(pStatus) {
  return (
    <header className="App-header">
      <p>
        Плюк закончится {pStatus.endDate.toLocaleString("ru-ru", {timeZone: "Europe/Samara"})}
      </p>
      <p>
        Ещё есть время! Собирай шмотки и бегом на электричку!
      </p>         
    </header>
  )
}

function App() {
  const today = new Date();
  // today.setDate(26);
  // today.setMonth(5);
  const pStatus = getStatus(today);
  const message = pStatus.status === "inProgress" ? <GoForP {...pStatus} /> : <WaitForP {...pStatus}/> 
  return (
    <div className="App">
      {message}
      <footer className="copyright">
          Shamansoft&copy; Плюк 2.0
      </footer>
    </div>
  );
}

export default App;
