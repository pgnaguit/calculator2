import { useState } from 'react';
import './App.css'

function CalcDisplay({dispValue}) {
  return (
    <div className='Display'>
      {dispValue}
    </div>
  );
}

function CalcButton({buttonLabel, buttonClassName = '', onCLick}) {
  return (
    <button className={`Button ${buttonClassName}`} onClick={onCLick}>
      {buttonLabel} 
    </button>
  );
}

function App() {
  const[disp, setDisp] = useState(0);
  const[operand1, setOperand1] = useState(null);
  const[operand2, setOperand2] = useState(null);
  const[operation, setOperation] = useState(null);

  const buttonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setDisp(value);
  }

  const clearButtonClickHandler = (e) => {
    e.preventDefault();
    setDisp(0);
    setOperand1(null);
    setOperand2(null);
    setOperation(null);
  }

  const equalButtonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if(operation === "+"){
      setDisp(parseInt(operand1) + parseInt(operand2));
    }
    else if(operation === "-"){
      setDisp(parseInt(operand1) - parseInt(operand2));
    }
    else if(operation === "*"){
      setDisp(parseInt(operand1) * parseInt(operand2));
    }
    else if(operation === "÷"){
      setDisp(parseInt(operand1) / parseInt(operand2));
    }
  }

    const operationButtonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOperation(value);
    setDisp(value);
  }

  const numbuttonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    //alert(value + "|" + operand1 + "|" + operand2 + "|" + operation);
    console.log(value + "|" + operand1 + "|" + operand2 + "|" + operation);
    if(operation === null)
      {

      if(operand1 === null) {
        setDisp(value);
        setOperand1(value);
       } else{
         setDisp(operand1 + value);
         setOperand1(operand1 + value);
       }
    }

    else{
      if(operand2 === null) {
        setDisp(value);
        setOperand2(value);
       } else{
         setDisp(operand2 + value);
         setOperand2(operand2 + value);
       }
    }
  }

const handleSurnameClick = () => {
  setDisp("Patrick Naguit");
};

  return (
    <div className='App'>
      <div className='Header'>Calculator of Patrick Naguit - WMD3A</div>
      <div className='Calculator'> 
        <CalcDisplay dispValue={disp}/>

  <div className='Keypad'>
  <CalcButton buttonLabel={7} onCLick={numbuttonClickHandler}/>
  <CalcButton buttonLabel={8} onCLick={numbuttonClickHandler}/>
  <CalcButton buttonLabel={9} onCLick={numbuttonClickHandler}/>
  <CalcButton buttonLabel={"÷"} buttonClassName="operator" onCLick={operationButtonClickHandler}/>

  <CalcButton buttonLabel={4} onCLick={numbuttonClickHandler}/>
  <CalcButton buttonLabel={5} onCLick={numbuttonClickHandler}/>
  <CalcButton buttonLabel={6} onCLick={numbuttonClickHandler}/>
  <CalcButton buttonLabel={"*"} buttonClassName="operator" onCLick={operationButtonClickHandler}/>

  <CalcButton buttonLabel={1} onCLick={numbuttonClickHandler}/>
  <CalcButton buttonLabel={2} onCLick={numbuttonClickHandler}/>
  <CalcButton buttonLabel={3} onCLick={numbuttonClickHandler}/>
  <CalcButton buttonLabel={"-"} buttonClassName="operator" onCLick={operationButtonClickHandler}/>

  <CalcButton buttonLabel={"C"} buttonClassName="clear" onCLick={clearButtonClickHandler}/>
  <CalcButton buttonLabel={0} onCLick={numbuttonClickHandler}/>
  <CalcButton buttonLabel={"="} buttonClassName="equal" onCLick={equalButtonClickHandler}/>
  <CalcButton buttonLabel={"+"} buttonClassName="operator" onCLick={operationButtonClickHandler}/>

  <CalcButton
    buttonLabel="Naguit"
    buttonClassName="surname"
    onCLick={handleSurnameClick}
  />
</div>
      </div>
    </div>
  )
}

export default App