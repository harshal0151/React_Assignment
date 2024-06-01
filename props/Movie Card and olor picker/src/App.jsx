import React, { useState } from "react";
import "./App.css";
import ColorCard from "./components/ColorCard";
import MoviesCard from "./components/MoviesCard";

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

  const moviedata = [
    {
      "movie":"Bright",
      "titel":"2017 Action",
      "discription":"Bright is a 2017 American urban fantasy action film directed by David Ayer and written by Max Landis. The movie is set in an alternate present where humans coexist with mythical creatures such as orcs and elves",
      "url":"https://th.bing.com/th/id/OIP.qb-Gqonnlf8FNmVtbkCfdQHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      "ratings" :"IMDB 8.5"
  },
  {
      "movie":"The Pursuit of Happyness",
      "titel":"2006 Motivational",

      "discription":"The Pursuit of Happyness is a 2006 American biographical drama film directed by Gabriele Muccino and starring Will Smith as Chris Gardner, a homeless salesman.",

      "url":"https://th.bing.com/th/id/R.ed367fbbcf33cec630d4aabd24ecd717?rik=q6M1DTZ3jCLpFg&riu=http%3a%2f%2fwww.leadershipgeeks.com%2fwp-content%2fuploads%2fleadershipmoviesthepursuitofhappyness.jpg&ehk=sRuL5%2fPPIVsmnPZ1qIcmyRD6j8sLmgkqQMQ6hlF1nPM%3d&risl=&pid=ImgRaw&r=0",

      "ratings" :"IMDB 9.2"
  },
  ];

  return (
    <>
      <div className="App">
        <h1>Color Picker</h1>
        <div className="color-picker">
          {colors.map((color) => (
            <ColorCard key={color.id} title={color.title} color={color.color} />
          ))}
        </div>
      </div>

      <section>
        <h1 className="moviesTitle">Movies</h1>
        <div className='movie-container'>
          {moviedata.map((movie, index) => (
            <MoviesCard
              key={index}
              movie={movie.movie}
              title={movie.titel}
              description={movie.discription}
              url={movie.url}
              ratings={movie.ratings}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default App;
