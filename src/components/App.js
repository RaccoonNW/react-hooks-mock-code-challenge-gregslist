import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewItem from "./NewItem";

function App() {

  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")
  const [checked, setChecked] = useState(false)


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

  if (checked === true) {
    displayedItems.sort(function(a, b) {
      return a.location.localeCompare(b.location)
    })
  }

  return (
    <div className="app">
      <Header
        setItems={setItems}
        onSearch={setSearch}
        items={items}
        setChecked={setChecked}
      />
      <ListingsContainer
        handleRemoveItem={handleRemoveItem}
        items={displayedItems}
      />
      <NewItem/>
    </div>
  );
}

export default App;
