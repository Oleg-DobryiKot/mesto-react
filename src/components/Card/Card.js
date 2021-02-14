function Card({onCardClick, link, name, likes}) {

  function handleClick() {
    onCardClick({link, name});
  }

  return (
    <div className="element">
      <img 
        className="element__image"
        src={ link }
        alt={ name }
        onClick={ handleClick }
      />
      <div className="element__description">
        <h3 className="element__title">{ name }</h3>
        <button type="button" className="element__trash-icon"></button>
        <div className="element__likes">
          <button type="button" className="element__like-icon"></button>
          <span className="element__like-count">{ likes.length }</span>
        </div>
      </div>
    </div>
  )
}

export default Card;