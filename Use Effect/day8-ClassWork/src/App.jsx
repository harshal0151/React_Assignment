import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import Note from "./components/Note";
import './App.css';  // Import the CSS file

function App() {
  const [notes, setNotes] = useState([
    {
      title: "# your heading",
      content: "# your heading",
    },
  ]);
  const [currentNote, setCurrentNote] = useState(0);

  const addNote = () => {
    setNotes([
      ...notes,
      {
        title: "# Enter Title Here",
        content: "# Enter Title Here",
      },
    ]);
  };

  const deleteNote = (index) => {
    const temp = [...notes];
    temp.splice(index, 1);
    setNotes(temp);
  };

  const changeCurrent = (index) => {
    setCurrentNote(index);
  };

  const modifyTheCurrentNote = (text) => {
    let temp = [...notes];
    temp[currentNote].content = text;
    temp[currentNote].title = text.split("\n")[0];
    setNotes(temp);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h1>Notes</h1> 
        <button onClick={addNote}>Add Note</button>
        {notes.map((item, index) => (
          <Note
            key={index}
            title={item.title}
            index={index}
            delNote={deleteNote}
            changeCurrent={changeCurrent}
          />
        ))}
      </div>
      <div className="editor-container">
        <MDEditor
          value={notes[currentNote].content}
          onChange={(value) => modifyTheCurrentNote(value)}
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;
