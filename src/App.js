import React from "react";
import FooterIcon from "./icons";
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

      <footer className="app-footer">
        <div className="image-container">
          <img src="./amy.png" alt="the word Amy written in letters cutout from magazines" />
          <div className="icons">
            <p><a aria-label="View Amy's Youtube channel" href="https://www.youtube.com/@amy.spencerproject/featured"
          target="_blank" data-position="top" data-tooltip="View Amy's Youtube channel" rel="noreferrer"
         ><i className="fa fa-youtube"></i><a aria-label="Amy's Youtube channel"
            href="https://www.youtube.com/@amy.spencerproject/featured" target="_blank"
            rel="noreferrer">youtube.com/@amy.spencerproject</a></a></p>
          </div>
          <FooterIcon />
        </div>
      </footer>
    </div>
  );
}

export default App;
