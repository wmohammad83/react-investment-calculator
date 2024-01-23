import { useState } from "react";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import Result from "./components/Result/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 2500,
    expectedReturn: 6,
    duration: 10,
  });


  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: +newValue,
      };
    });
  }



  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter a valid duration.</p>}
      {inputIsValid && <Result input={userInput} />}
    </>
  );
}

export default App;
