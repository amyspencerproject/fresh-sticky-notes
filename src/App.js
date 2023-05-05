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
  
  render() {
    return (
    <div className="App">
      <Header searchText={this.state.searchText} addNote={this.addNote} />
      <NoteList notes={this.state.notes} />
      <Footer />
    </div>
    );
  }
}

export default App;
