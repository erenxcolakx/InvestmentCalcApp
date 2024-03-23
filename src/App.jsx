import Header from "./components/Header"
import InputContainer from "./components/InputContainer"
import ResultPanel from "./components/ResultPanel"
import { useState } from 'react'

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function updateUserInput(event) {
    const { name, value } = event.target;
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        [name]: +value,  //The + sign in front of a variable in JavaScript is used to convert a string to a number.
      };
    });
  }
  return (
    <>
      <Header />
      <InputContainer input = {userInput} onChange={updateUserInput} />
      {inputIsValid ? <ResultPanel input = {userInput} /> : <p className="center">Please enter a duration greater than zero.</p>}
    </>
  )
  }
export default App
