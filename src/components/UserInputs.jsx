import { useState } from "react";
const UserInputs = ({ onGet }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!input1 || !input2 || !input3 || !input4) {
      alert("Enter all inputs");
    } else if (
      input1.length >= 2 ||
      input2.length >= 2 ||
      input3.length >= 2 ||
      input4.length >= 2
    ) {
      alert("Enter number from 1 to 9");
    } else if (
      +input1 === 0 ||
      +input2 === 0 ||
      +input3 === 0 ||
      +input4 === 0
    ) {
      alert("the value 0 is invalid");
    } else {
      onGet(+input1, +input2, +input3, +input4);

      setInput1("");
      setInput2("");
      setInput3("");
      setInput4("");
    }
  };
  return (
    <div className="allInputs">
      <div className="form-group">
        <label htmlFor="first input">First Number goes here:</label>
        <input
          type="number"
          className="form-control input"
          placeholder="First Number"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="second input">Second Number goes here:</label>
        <input
          type="number"
          className="form-control input"
          placeholder="Second Number"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="third input">Third Number goes here:</label>
        <input
          type="number"
          className="form-control input"
          placeholder="Third Number"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="fourth input">Fourth Number goes here:</label>
        <input
          type="number"
          className="form-control input"
          placeholder="Fourth Number"
          value={input4}
          onChange={(e) => setInput4(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="form-control submit btn btn-primary"
        onClick={onSubmit}
      >
        Submit
      </button>
      <div className="replay">
        <button type="button" className="form-control btn btn-primary">
          Re-play
        </button>
        <i className="fab fa-reload"></i>
      </div>
      <div className="home mt-2">
        <a className="form-control btn btn-success" href="index.html">
          Home
        </a>
      </div>
    </div>
  );
};

export default UserInputs;
