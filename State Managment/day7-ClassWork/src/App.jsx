import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [authorName, setAuthorName] = useState("");
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("authors")) {
      const storedAuthors = JSON.parse(localStorage.getItem("authors"));
      setAuthors(storedAuthors);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("authors", JSON.stringify(authors));
  }, [authors]);

  const handleAddAuthor = (e) => {
    e.preventDefault();
    if (authorName.trim()) {
      setAuthors([...authors, { name: authorName, completed: false }]);
      setAuthorName("");
    }
  };

  const handleDeleteAuthor = (index) => {
    const newAuthors = authors.filter((_, i) => i !== index);
    setAuthors(newAuthors);
  };

  const handleToggleComplete = (index) => {
    const newAuthors = authors.map((author, i) => 
      i === index ? { ...author, completed: !author.completed } : author
    );
    setAuthors(newAuthors);
  };

  return (
    <section className='container'>
      <div className='grocery_bud'>
        <h3>Grocery Bud</h3>

        <form onSubmit={handleAddAuthor}>
          <input 
            type="text" 
            value={authorName} 
            onChange={(e) => setAuthorName(e.currentTarget.value)} 
            placeholder="Enter Grocery name" 
          />
          <input type="submit" value="Add" />
        </form>

        <div className='author_list'>
          {authors.map((item, index) => (
            <div key={index} className='author_item'>
              <input 
                type="checkbox" 
                checked={item.completed} 
                onChange={() => handleToggleComplete(index)} 
              />
              <span className={item.completed ? 'completed' : ''}>{item.name}</span>
              <button onClick={() => handleDeleteAuthor(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
