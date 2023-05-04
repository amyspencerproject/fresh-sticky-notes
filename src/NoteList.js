import React from "react";
import Note from "./Note.js";

const NoteList = () => {
    return (
        <div className="notes-container">
        <ul className="notes-list">
          <Note />
          <Note />
          <Note />
        </ul>
      </div>
    )
} 

export default NoteList;