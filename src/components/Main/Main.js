import api from '../../utils/api';
import Card from '../Card/Card';
import { useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  function handleCardLike(card) {
    const isLiked = card.likes.some(item => item._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      const newCards = cards.map(cardItem => cardItem._id === card._id ? newCard : cardItem);
      setCards(newCards);
    });
  } 

  function handleCardDelete(card) {
    const isOwner = card.owner._id === currentUser._id;

    if (!isOwner) {
      return;
    }

    api.deleteCard(card._id).then(() => {
      const newCards = cards.filter(({ _id }) => _id !== card._id);
      setCards(newCards);
    });
  } 
  
  useEffect(() => {
      api.getInitialCards()
      .then(res => {
        const cards = res.map(card => {
          return {
            _id: card._id,
            name: card.name,
            link: card.link,
            likes: card.likes,
            owner: card.owner
          }
        })
        setCards(cards);
      })
      .catch((err) => {
        console.error(err);
      })
  }, [])

  return (
    <main className="content">
      {/* {JSON.stringify(currentUser)} */}
      <section className="profile">
        <div className="profile__overlay" onClick={ onEditAvatar }>
          <img 
            className="profile__avatar" 
            src={ currentUser.avatar } 
            alt="Фото профиля"
          />
        </div>
        <div className="profile__info">
          <div className="profile__edit">
            <h1 className="profile__title">{ currentUser.name }</h1>
            <button 
              type="button" 
              className="profile__edit-btn"
              onClick={ onEditProfile }>  
            </button>
          </div>
          <p className="profile__description">{ currentUser.about }</p>
        </div>
        <button 
          type="button" 
          className="profile__add-btn"
          onClick={ onAddPlace }> 
        </button>
      </section>

      <section className="elements">
        {cards.map(card => <Card 
          key={ card._id }
          { ...card } 
          onCardClick={ onCardClick } 
          onCardLike={ handleCardLike }
          onCardDelete={ handleCardDelete }
        />)}
      </section>

    </main>
  )
}
  
export default Main;