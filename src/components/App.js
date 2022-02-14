import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((res) => res.json())
      .then(setItems)
  }, [])


  function handleRemoveItem(id){
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
  }

  const displayedItems = items.filter((item) =>
    item.description.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <div className="app">
      <Header
        onSearch={setSearch}
      />
      <ListingsContainer
        // items={items}
        handleRemoveItem={handleRemoveItem}
        items={displayedItems}
      />
    </div>
  );
}

export default App;
