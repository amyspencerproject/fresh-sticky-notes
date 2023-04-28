import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="image-container">
          <img src="./notes-780.png" alt="the word notes written in letters cutout from magazines" />
        </div>
        <aside className="app-header__controls">
          <button className="add-new">+ New Note</button>
          <input  className="search" type="text" placeholder="Type here to search" />
        </aside>
      </header>
      
      <div className="notes-container">
        <ul className="notes-list">
          <li className="note">
            <input className="note__title" type="text" placeholder='Title' />
            <textarea className="note__description" placeholder="Description" ></textarea>
            <span className="note__delete">X</span>
          </li>
          <li className="note">
          <input className="note__title" type="text" placeholder='Title' />
            <textarea className="note__description" placeholder="Description" ></textarea>
            <span className="note__delete">X</span>
          </li>
          <li className="note">
            <input className="note__title" type="text" placeholder='Title' />
            <textarea className="note__description" placeholder="Description" ></textarea>
            <span className="note__delete">X</span>
          </li>
        </ul>
      </div>

      <footer className="app-footer"></footer>
    </div>
  );
}

export default App;
