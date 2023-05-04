import React from "react";
import Note from "./Note.js";

const NoteList = (props) => {
    //callback function to add true boolean results to filter array ie add if note.doesMatchSearch = true
    const keepSearchMatches = (note) => note.doesMatchSearch;
    // function returns doesMatchSearch = true elements to new array
    const searchMatches = props.notes.filter(keepSearchMatches);
    // call back function that pulls individual note elements 
    const renderNote = (note) => <Note note={note} key={note.id}/>
    const noteElements = searchMatches.map((renderNote));

    return (
        <div className="notes-container">
        <ul className="notes-list">
          {noteElements}
        </ul>
      </div>
    )
} 

export default NoteList;