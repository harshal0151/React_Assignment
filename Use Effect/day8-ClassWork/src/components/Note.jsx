import React from "react";

export default function Note({ index, title, delNote, changeCurrent }) {
  return (
    <div className="note">
      <h3>{title}</h3>
      <button onClick={() => delNote(index)}>Delete</button>
      <button className="del_btn" onClick={() => changeCurrent(index)}>Edit</button>
      <hr />
    </div>
  );
}
