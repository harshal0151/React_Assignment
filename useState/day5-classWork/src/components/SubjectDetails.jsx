import React from "react";

export default function SubjectDetails({
  subject,
  hour,
  increase,
  decrease,
  index,
}) {
  return (
    <div className="subject">
     
     <p className="subject_task">{subject}</p>
      <p>{hour}/hr </p>
     <button className = "btn" onClick={() => increase(index)}>+</button>
      <button className = "btn2" onClick={() => decrease(index)}>-</button>
     
    </div>
  );
}
