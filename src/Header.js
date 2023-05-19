import React from "react";

const Header = (props) => {
  const updateSearch = (e) => {
    const text = e.target.value;
    props.onSearch(text);
  }

    return (
        <header className="app-header">
        <div className="header-image-container">
        <picture>
          <source media="(min-width: 1000px)" srcSet="./notes-desktop.png" />
          <source media="(min-width: 768px)" srcSet="./notes-780.png" />
          <img src="./notes-400.png" alt="the word notes written in letters cutout from magazines" />
        </picture>
        </div>
        <aside className="app-header__controls">
          <button className="add-new" onClick={props.addNote}>+ New Note</button>
          <form>
            <input  className="search" type="text" placeholder="Type here to search" onChange={updateSearch} onSubmit={updateSearch} value={props.searchText} />
          </form>
        </aside>
      </header>
    );
};

export default Header
