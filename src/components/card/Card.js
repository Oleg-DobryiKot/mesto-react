function Card(props) {

  function handleClick() {
    props.onCardClick(props);
  //  console.log(props);
  //  debugger
  }

  return (
    <div className="element">
      <img 
        className="element__image"
        src={ props.link }
        alt={ props.name }
        onClick={ handleClick }
      />
      <div className="element__description">
        <h3 className="element__title">{ props.name }</h3>
        <button type="button" className="element__trash-icon"></button>
        <div className="element__likes">
          <button type="button" className="element__like-icon"></button>
          <span className="element__like-count">{ props.likes.length }</span>
        </div>
      </div>
    </div>
  )
}

export default Card;