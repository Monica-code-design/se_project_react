import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, handleDeleteCard }) => {
  return (
    <div className={`item-modal`}>
      <div className="item-modal__content">
        <button
          className="item-modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="item-modal__image"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        ></img>
        <div className="item-modal__info">
          <p className="item-modal__title">{selectedCard.name}</p>
          <div className="item-modal__weather-type">
            Weather: {selectedCard.weather}
          </div>
          <button
            className="item-modal__button-delete"
            type="button"
            onClick={() => handleDeleteCard(selectedCard._id)}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
