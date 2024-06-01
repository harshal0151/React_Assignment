import React, { useState } from "react";
import "./App.css";
import ColorCard from "./components/ColorCard";

const App = () => {
  const [colors, setColors] = useState([
    { id: 1, title: "Red", color: "#FF0000" },
    { id: 2, title: "Green", color: "#00FF00" },
    { id: 3, title: "Blue", color: "#0000FF" },
    { id: 4, title: "Yellow", color: "#FFFF00" },
    { id: 5, title: "Cyan", color: "#00FFFF" },
    { id: 6, title: "Magenta", color: "#FF00FF" },
    { id: 7, title: "Orange", color: "#FFA500" },
    { id: 8, title: "Purple", color: "#800080" },
    { id: 9, title: "Teal", color: "#008080" },
    { id: 10, title: "Gold", color: "#FFD700" },
  ]);

  return (
    <div className="App">
      <h1>Color Picker</h1>
      <div className="color-picker">
        {colors.map((color) => (
          <ColorCard key={color.id} title={color.title} color={color.color} />
        ))}
      </div>
    </div>
  );
};

export default App;
