import './main.css';
import api from '../../utils/api';
import Card from '../card/Card';
import { useEffect, useState } from 'react';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.error(err);
      })
  }, [])

  useEffect(() => {
    api.getInitialCards()
      .then(res => {
        const cards = res.map(card => {
          return {
            _id: card._id,
            name: card.name,
            link: card.link,
            likes: card.likes
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
      <section className="profile">
        <div className="profile__overlay" onClick={ onEditAvatar }>
          <img 
            className="profile__avatar" 
            src={ userAvatar } 
            alt="Фото профиля"
          />
        </div>
        <div className="profile__info">
          <div className="profile__edit">
            <h1 className="profile__title">{ userName }</h1>
            <button 
              type="button" 
              className="profile__edit-btn"
              onClick={ onEditProfile }>  
            </button>
          </div>
          <p className="profile__description">{ userDescription }</p>
        </div>
        <button 
          type="button" 
          className="profile__add-btn"
          onClick={ onAddPlace }> 
        </button>
      </section>

      <section className="elements">
        {cards.map(card => <Card key={ card._id } { ...card } onCardClick={ onCardClick }/>)}
      </section>

    </main>
  )
}
  
export default Main;