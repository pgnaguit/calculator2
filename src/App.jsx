import { useState } from 'react';
import './App.css';

function CalcDisplay({ dispValue }) {
  return (
    <div className='Display'>
      {dispValue}
    </div>
  );
}

function CalcButton({ buttonLabel, buttonClassName = '', onCLick }) {
  return (
    <button className={`Button ${buttonClassName}`} onClick={onCLick}>
      {buttonLabel}
    </button>
  );
}

function App() {
  const initialText = "10 Things That Require Zero Talent";
  const [disp, setDisp] = useState(initialText);

  // Key mappings matching requirements C
  const textMap = {
    "1": "1 - Being On Time",
    "2": "2 - Making An Effort",
    "3": "3 - Being High Energy",
    "4": "4 - Having A Positive Attitude",
    "5": "5 - Being Passionate",
    "6": "6 - Using Good Body Language",
    "7": "7 - Being Coachable",
    "8": "8 - Doing A Little Extra",
    "9": "9 - Being Prepared",
    "0": "0 - Having A Strong Work Ethic",
    "NAME": "PATRICK NAGUIT",
    "SUBJ": "WMD3A"
  };

  const handleKeyClick = (e) => {
    e.preventDefault();
    const key = e.target.innerText;
    if (textMap[key]) {
      setDisp(textMap[key]);
    }
  };

  const clearButtonClickHandler = (e) => {
    e.preventDefault();
    setDisp(initialText);
  };

  return (
    <div className='App'>
      {/* Requirement A: Display full name and section at top */}
      <div className='Header'>PATRICK NAGUIT - WMD3A</div>

      <div className='Calculator'>
        {/* Requirement B & C: Main Display Screen */}
        <CalcDisplay dispValue={disp} />

        {/* Calculator Keypad */}
        <div className='Keypad'>
          <CalcButton buttonLabel={7} onCLick={handleKeyClick} />
          <CalcButton buttonLabel={8} onCLick={handleKeyClick} />
          <CalcButton buttonLabel={9} onCLick={handleKeyClick} />

          <CalcButton buttonLabel={4} onCLick={handleKeyClick} />
          <CalcButton buttonLabel={5} onCLick={handleKeyClick} />
          <CalcButton buttonLabel={6} onCLick={handleKeyClick} />

          <CalcButton buttonLabel={1} onCLick={handleKeyClick} />
          <CalcButton buttonLabel={2} onCLick={handleKeyClick} />
          <CalcButton buttonLabel={3} onCLick={handleKeyClick} />

          <CalcButton buttonLabel={0} onCLick={handleKeyClick} />
          <CalcButton buttonLabel={"NAME"} buttonClassName="operator" onCLick={handleKeyClick} />
          <CalcButton buttonLabel={"SUBJ"} buttonClassName="operator" onCLick={handleKeyClick} />

          <CalcButton buttonLabel={"CLEAR"} buttonClassName="clear" onCLick={clearButtonClickHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;