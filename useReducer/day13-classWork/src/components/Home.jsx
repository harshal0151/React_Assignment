import { useState } from "react";

function Home() {
  const [input, setInput] = useState("");

  function rmExtraSpaces() {
    let temp = input.split(" ");
    let result = "";
    temp.forEach((item) => {
      if (item.length > 0) {
        result += item;
        result += " ";
      }
    });
    result = result.trim();
    setInput(result);
  }

  function copytoClipboard() {
    if (navigator) {
      navigator.clipboard.writeText(input);
      alert("Copied Successfully");
    }
  }
  return (
    <div className="container">
      <h1>Enter your Text</h1>

      <textarea
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
      ></textarea>

      <div className="btn_container">
        <button onClick={() => setInput(input.toUpperCase())}>
          Conver Upper Case
        </button>
        <button onClick={() => setInput(input.toLowerCase())}>
          Conver Lower Case
        </button>
        <button onClick={() => setInput("")}>Clear Text</button>
        <button onClick={copytoClipboard}>Copy to Clipboard</button>
        <button onClick={rmExtraSpaces}>Remove Extra Spaces</button>
      </div>

        <div>
          <h1>Summary</h1>
          <p>Number of Words: {input.split(" ").length} </p>
          <p>Number of character: {input.length}</p>
          <p>Reading Time: {input.split(" ").length * 0.0001} </p>
          <h1>Preview</h1>
        </div>
        <div >
          {" "}
          <pre>{input}</pre>
        </div>
      </div>
   
  );
}
export default Home;
