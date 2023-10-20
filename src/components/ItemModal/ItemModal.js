import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, handleDeleteCard }) => {
  return (
    <div className={`modal`}>
      <div className="modal__content">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="modal__image"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        ></img>
        <div className="modal__info">
          <p className="modal__title">{selectedCard.name}</p>
          <div className="modal__weather-type">
            Weather: {selectedCard.weather}
          </div>
          <button
            className="modal__button-delete"
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
