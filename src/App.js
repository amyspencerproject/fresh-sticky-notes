import React, { Component } from "react";
import Header from "./Header.js"
import NoteList from "./NoteList.js";
import Footer from "./Footer.js";

// import { notesData } from "./data.js";


class App extends Component {
  state = 
  {notes: [{
        id: 1,
        title: "eat",
        description: "reese peanut butter cups",
        doesMatchSearch: true
    },
    {
        id: 2,
        title: "sleep",
        description: "eight hours",
        doesMatchSearch: true
    },
    {
        id: 3,
        title: "code",
        description: "build an awesome ai",
        doesMatchSearch: true
    }],
  searchText: "Search"
  };
  
  render() {
    return (
    <div className="App">
      <Header searchText={this.state.searchText} />
      <NoteList notes={this.state.notes} />
      <Footer />
    </div>
    );
  }
}

export default App;
