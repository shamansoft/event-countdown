import {getStatus} from './eventCountdown/plukService.js'
import './App.css';

function WaitForP(pStatus) {
  return (
    <section className="App-section">
      <h1>
        {pStatus.daysLeft}
      </h1>        
      <p className="days-ext">
        <span className="days-bin">{pStatus.daysLeft.toString(2)}</span>
        <span className="days-hex">{pStatus.daysLeft.toString(16)}</span>
      </p>        
    </section>
  )
}

function GoForP(pStatus) {
  return (
    <section className="App-section">
      <h1>
        Плюк закончится <strong>{pStatus.endDate.toLocaleString("ru-ru", {timeZone: "Europe/Samara"})}</strong>
      </h1>
      <p>
        Ещё есть время! БХЗянин, собирай шмотки и бегом на электричку!
      </p>         
    </section>
  )
}

function PHeader(pStatus) {
  const pMsg = pStatus.status === "inProgress" ? "уже идёт" : `начнётся через ${pStatus.daysLeft} ${pStatus.ruDays}`;
  return (
    <header>
      <p>
        Плюк {pStatus.startDate.getFullYear()} {pMsg}
      </p>
      <p>
        Начало {pStatus.startDate.toLocaleString("ru-ru", {timeZone: "Europe/Samara"})} 
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
      <PHeader {...pStatus} />
      {message}
      <footer className="copyright">
          Shamansoft&copy; Плюк 2.0
      </footer>
    </div>
  );
}

export default App;
