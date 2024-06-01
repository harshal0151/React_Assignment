import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import quotes from "./assets/data"; 

function App() {
  return (
    <>
      <Navbar />
      <section>
        <div className="container">
          {quotes.map((quote, index) => (
            <div className="card" key={index}>
              <p>{quote.quote}</p>
              <span>- {quote.author}</span>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
