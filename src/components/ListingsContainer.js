import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({handleRemoveItem, items}) {

  return (
    <main>
      <ul className="cards">
      {items.map(item => (
        <ListingCard
          key={item.id}
          item={item}
          handleRemoveItem={handleRemoveItem}
        />

      ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
