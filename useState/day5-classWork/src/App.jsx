import { useState, useEffect } from "react";
import SubjectDetails from "./components/SubjectDetails";
import "./App.css"
function App() {
  const [subject, setSubject] = useState("");
  const [hour, setHour] = useState("");

  const [subjects, setSubjects] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let copyArray = [...subjects];
    copyArray.push({
      subject: subject,
      hour: parseInt(hour),
    });

    setSubjects(copyArray);
  };

  const increaseHour = (index) => {
    let copyArray = [...subjects];
    copyArray[index]["hour"] += 1;
    setSubjects(copyArray);
  };

  const decreaseHour = (index) => {
    let copyArray = [...subjects];
    copyArray[index]["hour"] -= 1;
    setSubjects(copyArray);
  };

  useEffect(() => {
    if (subjects.length > 0)
      localStorage.setItem("subject", JSON.stringify(subjects));
  }, [subjects]);

  useEffect(() => {
    if (localStorage.getItem("subject")) {
      let array = JSON.parse(localStorage.getItem("subject"));
      setSubjects(array);
    }
  }, []);

  return (
    <div className="container">
      <h1>Geekster Education Planner</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          onChange={(e) => setSubject(e.currentTarget.value)}
          type="text"
          placeholder="Subject"
        />
        <br />
        <input
          required
          onChange={(e) => setHour(e.currentTarget.value)}
          type="number"
          placeholder="Hour"
        />
        <br />
        <input type="submit" value="Add" className="btn3" />
      </form>

      {subjects.map((item, index) => (
        <SubjectDetails
          increase={increaseHour}
          decrease={decreaseHour}
          subject={item.subject}
          hour={item.hour}
          index={index}
        />
      ))}
    </div>
  );
}

export default App;
