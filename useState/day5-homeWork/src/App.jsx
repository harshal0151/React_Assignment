import { useState } from "react";
import "./App.css";
import { data } from "./constant";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount < 1) alert(" Ayyo ! you know that you wrote negative input 😵") ;
    if (amount > 16)  alert(" Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀") ;
    setText(data.slice(0, amount));
  };

  return (
    <>
      <div className="container">
        <h3>TIRED OF BORING LOREM IPSUM?</h3>

        <form className="container-form" onSubmit={handleSubmit}>
          <label> Paragraphs : </label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button className="btn">GENERATE </button>
        </form>

        <article>
          {text.map((data, index) => {
            return <p key={index}>{data}</p>;
          })}
        </article>
      </div>
    </>
  );
}

export default App;
