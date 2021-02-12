function ImagePopup({isOpen, onClose}) {
  return (
    <section className={ `popup popup_type-image ${ isOpen ? 'popup_is-opened' : '' }`}>
    <div className="popup__container popup__container_type-image">
      <button onClick={ onClose } type="button" className="popup__close"></button>
      <img className="popup__fullpic" src="#" alt="#"/>
      <h3 className="popup__title popup__title_type-image">Тестовое название</h3>
    </div>
  </section>
  )
}

export default ImagePopup;