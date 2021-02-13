function ImagePopup(props) {
  //{card, onClose, isOpen}
  return (
    <section className={ `popup popup_type-image ${ props.isOpen ? 'popup_is-opened' : '' }`}>
    <div className="popup__container popup__container_type-image">
      <button onClick={ props.onClose } type="button" className="popup__close"></button>
      <img className="popup__fullpic" src={ props.card.link } alt={ props.card.name }/>
      <h3 className="popup__title popup__title_type-image">{ props.card.name }</h3>
    </div>
  </section>
  )
}

export default ImagePopup;