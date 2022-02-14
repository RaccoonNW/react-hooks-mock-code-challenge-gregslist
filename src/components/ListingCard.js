import React, {useState} from "react";

function ListingCard({
  item: { description, id, image, location},
  handleRemoveItem
  }) {

    const [like, setLike] = useState(false)

    function handleLike() {
      (like === true) ? setLike(false) : setLike(true)
    }

    function handleDelete() {
      fetch(`http://localhost:6001/listings/${id}`, {
        method: "DELETE",
      })

      handleRemoveItem(id)
    }




  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {like ? (
          <button
            className="emoji-button favorite active"
            onClick={handleLike}
          >
            ★
          </button>
        ) : (
          <button 
            className="emoji-button favorite"
            onClick={handleLike}
          >
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button 
          className="emoji-button delete"
          onClick={handleDelete}
        >
            🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
