import React from "react";
import Search from "./Search";

function Header({onSearch, setChecked, alphabetize}) {

  function toggleCheck(e) {
    e.target.checked ? setChecked(true) : setChecked(false)
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search
        onSearch={onSearch}
      />
      <p className="sort-text">Sort by location:</p>
      <input type="checkbox" onChange={toggleCheck}/>
    </header>
  );
}

export default Header;
