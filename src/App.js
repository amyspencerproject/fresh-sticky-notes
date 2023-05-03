import React from "react";
import FooterIcon from "./icons";
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="image-container">
        <picture>
          <source media="(min-width: 1000px)" srcSet="./notes-desktop.png" />
          <source media="(min-width: 768px)" srcSet="./notes-780.png" />
          <img src="./notes-400.png" alt="the word notes written in letters cutout from magazines" />
        </picture>
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

      <footer className="app-footer">
        <div className="image-container">
          <img src="./by-amy.png" alt="the word Amy written in letters cutout from magazines" />
          <div className="icons">
          <FooterIcon />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
