import React, { Component } from "react";
import Header from "./Header.js"
import NoteList from "./NoteList.js";
import Footer from "./Footer.js";


class App extends Component {
  state = 
  {notes: [{
    id: Date.now(),
    title: "",
    description: "",
    doesMatchSearch: true}],
  searchText: ""
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

  onSearch = (text) => {
    const newSearchText = text.toLowerCase();
    const updatedNotes = this.state.notes.map( note => {
      if (!newSearchText) {
        note.doesMatchSearch = true;
        return note;
      } else {
        const title = note.title.toLowerCase();
        const description = note.description.toLowerCase();
        const titleMatch = title.includes(newSearchText);
        const descriptionMatch = description.includes(newSearchText);
        const hasMatch = titleMatch || descriptionMatch;
        note.doesMatchSearch = hasMatch;
        return note;
      }
    })
    this.setState(
      {notes: updatedNotes,
      searchText: newSearchText
    });
  }

  onDelete = (deleteMeId) => {
    const updatedNotes = this.state.notes.filter( note => note.id !== deleteMeId)
    this.setState({ notes: updatedNotes})
  }

  componentDidUpdate() {
    const savedNotesString = JSON.stringify(this.state.notes);
    localStorage.setItem("savedNotesString", savedNotesString);
  }

  componentDidMount() {
    const savedNotesString = localStorage.getItem("savedNotesString");
    if (savedNotesString) {
      const savedNotes = JSON.parse(savedNotesString);
      this.setState({notes: savedNotes})
    }
  }

  
  render() {
    return (
    <div className="App">
      <Header searchText={this.state.searchText} addNote={this.addNote} onSearch={this.onSearch} />
      <NoteList notes={this.state.notes} onType={this.onType} onDelete={this.onDelete} />
      <Footer />
    </div>
    );
  }
}

export default App;
