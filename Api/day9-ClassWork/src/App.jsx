import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [exercises, setExercises] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const options = {
        method: 'GET',
        url: 'https://work-out-api1.p.rapidapi.com/search',
        params: { Muscles: 'biceps' },
        headers: {
          'x-rapidapi-key': '280bfe97c4msh84b84ada3f78524p1e7593jsn6cd59edb075b',
          'x-rapidapi-host': 'work-out-api1.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        const data = response.data;
        console.log(data);
        setExercises(data);
       
      } catch (error) {
        console.error(error);

       
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
     
       {  exercises.map((exercise, index) => (
          <div key={index} className="exercise">
            <h3>{exercise.Muscles}</h3>
           <video src= {exercise.video}></video>
          </div>
        ))
      }
    </div>
    
  );
}

export default App;
