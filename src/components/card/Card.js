function Card(props) {
  return (
    <div className="element">
      <img className="element__image" src={ props.link } alt={ props.name } />
      <div className="element__description">
        <h3 className="element__title">{ props.name }</h3>
        <button type="button" className="element__trash-icon"></button>
        <div className="element__likes">
          <button type="button" className="element__like-icon"></button>
          <span className="element__like-count">0</span>
        </div>
      </div>
    </div>
  )
}

export default Card;