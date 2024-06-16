
import { useEffect } from 'react';
import './App.css'

function App() {
 

async  function data(){
    const url = 'https://work-out-api1.p.rapidapi.com/search?Muscles=biceps';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '280bfe97c4msh84b84ada3f78524p1e7593jsn6cd59edb075b',
		'x-rapidapi-host': 'work-out-api1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response;
	console.log(result);
} catch (error) {
	console.error(error);
}
  }

useEffect(()=>{
  data()

  },[]) 

  return (
    <>

    <h1>Hello</h1>
    </>
  )
}

export default App
