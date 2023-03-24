import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Reload from "./components/Reload";
import Results from "./components/Results";
import UserInputs from "./components/UserInputs";
import WinModal from "./components/WinModal";

const App = () => {
  const [results, setResult] = useState([]);
  const [win, setWin] = useState(false);

  // numbers from 1 - 9
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // get four different random numbers from the numbers array

  // get the first random number and remove from the numbers array
  // get first number
  let randNum1 = numbersArray[Math.floor(Math.random() * numbersArray.length)];

  // remove from array
  let a = numbersArray.indexOf(randNum1);

  if (a > -1) {
    numbersArray.splice(a, 1);
  }

  // get the second random number and remove from the numbers array
  // get second number
  let randNum2 = numbersArray[Math.floor(Math.random() * numbersArray.length)];

  // remove from array
  let b = numbersArray.indexOf(randNum2);

  if (b > -1) {
    numbersArray.splice(b, 1);
  }

  // get the third random number and remove from the numbers array
  // get third number
  let randNum3 = numbersArray[Math.floor(Math.random() * numbersArray.length)];

  // remove from array
  let c = numbersArray.indexOf(randNum3);

  if (c > -1) {
    numbersArray.splice(c, 1);
  }

  // get the fourth random number and remove from the numbers array
  // get fourth number
  let randNum4 = numbersArray[Math.floor(Math.random() * numbersArray.length)];

  // remove from array
  let d = numbersArray.indexOf(randNum4);

  if (d > -1) {
    numbersArray.splice(d, 1);
  }

  // put inside an array
  const [randomNumbers, setRandomNumbers] = useState([
    randNum1,
    randNum2,
    randNum3,
    randNum4,
  ]);

  const getUserInputs = (input1, input2, input3, input4) => {
    const userNumbers = [input1, input2, input3, input4];

    // check if userNumbers is in randomNumbers
    let check1 = randomNumbers.includes(userNumbers[0]);
    let check2 = randomNumbers.includes(userNumbers[1]);
    let check3 = randomNumbers.includes(userNumbers[2]);
    let check4 = randomNumbers.includes(userNumbers[3]);

    let inj = 0;
    let killCount = 0;

    // if user inputs is inside work2 array, change to 1
    if (check1 === true) {
      check1 = 1;
    }
    if (check2 === true) {
      check2 = 1;
    }
    if (check3 === true) {
      check3 = 1;
    }
    if (check4 === true) {
      check4 = 1;
    }

    inj += check1 + check2 + check3 + check4;

    // check if a userNumber exists in randomNumbers array and on the same index
    if (randomNumbers[0] === userNumbers[0]) {
      killCount++;
    }
    if (randomNumbers[1] === userNumbers[1]) {
      killCount++;
    }
    if (randomNumbers[2] === userNumbers[2]) {
      killCount++;
    }
    if (randomNumbers[3] === userNumbers[3]) {
      killCount++;
    }

    inj = inj - killCount;

    const id = Math.floor(Math.random() * 10000) + 1;

    const newResult = { id, inj, killCount, userNumbers, randomNumbers };

    setResult([...results, newResult]);

    if (killCount === 4) {
      setWin(true);
    }
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <Header />
            <Alert />
            {!win ? <UserInputs onGet={getUserInputs} /> : <Reload />}
          </div>
        </div>
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <Modal results={results} />
            <Results results={results} />
          </div>
        </div>
      </div>
      {win && <WinModal results={results} win={() => setWin(!win)} />}
      <Footer />
    </div>
  );
};

export default App;
