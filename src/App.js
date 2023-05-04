import React from "react";
import Header from "./Header.js"
import NoteList from "./NoteList.js";
import Footer from "./Footer.js";
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <NoteList />
      <Footer />
    </div>
  );
}

export default App;
