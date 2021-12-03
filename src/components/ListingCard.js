import React, { useState } from "react";

function ListingCard({listing}) {

  const { id, description, image, location} = listing

  const [isFavorite, setIsFavorite] = useState(false)

  function clickFavorite() {
    setIsFavorite(!isFavorite)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={clickFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={clickFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
