import React, { Component } from "react";
import Header from "./Header.js"
import NoteList from "./NoteList.js";
import Footer from "./Footer.js";

// import { notesData } from "./data.js";


class App extends Component {
  state = 
  {notes: [{
    id: Date.now(),
    title: "",
    description: "",
    doesMatchSearch: true}],
  searchText: "Search now"
  };

  addNote = () => {
    // pass this event handler method to the Header where the event listner is located
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true
    };
    // State needs to be copied and the new note added to the notes array
    const newNotes = [newNote, ...this.state.notes];
    // then the new notes array should be set as State and the UI should update
    this.setState({ notes: newNotes });
  };

  onType = (editMeId, updatedKey, updatedValue) => {
    //parameters, editMeId == id of note object changed & updatedKey == title or description that was updated in the note object & updatedValue == value of updated title or description field
    const updatedNotes = this.state.notes.map( note => {
      if (note.id !== editMeId) {
          return note;
        } else {
          if (updatedKey === "title" ) {
            note.title = updatedValue;
            return note;
          } else {
            note.description = updatedValue;
            return note;
          }
        }
    })
    this.setState({notes: updatedNotes});
  }
  
  render() {
    return (
    <div className="App">
      <Header searchText={this.state.searchText} addNote={this.addNote} />
      <NoteList notes={this.state.notes} onType={this.onType} />
      <Footer />
    </div>
    );
  }
}

export default App;
