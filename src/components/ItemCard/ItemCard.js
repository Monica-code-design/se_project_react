import React from "react";
import "./ItemCard.css";

function ItemCard({ name, link, onCardClick }) {
  return (
    <div className="itemCards__container">
      <div className="itemCard__container" onClick={onCardClick}>
        <div>
          <h2 className="itemCard__title">{name}</h2>
        </div>
        <img className="itemCard__image" name={name} src={link} alt={name} />
      </div>
    </div>
  );
}

export default ItemCard;