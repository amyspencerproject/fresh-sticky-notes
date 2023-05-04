import React from "react";

const Header = (props) => {
    return (
        <header className="app-header">
        {console.log(props)}
        <div className="header-image-container">
        <picture>
          <source media="(min-width: 1000px)" srcSet="./notes-desktop.png" />
          <source media="(min-width: 768px)" srcSet="./notes-780.png" />
          <img src="./notes-400.png" alt="the word notes written in letters cutout from magazines" />
        </picture>
        </div>
        <aside className="app-header__controls">
          <button className="add-new">+ New Note</button>
          <input  className="search" type="text" placeholder="Type here to search" value={props.searchText} />
        </aside>
      </header>
    )
}

export default Header
