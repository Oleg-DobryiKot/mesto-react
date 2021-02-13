import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import PopupWithForm from './popup/PopupWithForm';
import ImagePopup from './popup/ImagePopup';
import { useState } from 'react';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  return (
    
    <div className="page">
      <Header/>
      <Main
        onEditProfile={ handleEditProfileClick }
        onAddPlace={ handleAddPlaceClick }
        onEditAvatar={ handleEditAvatarClick }
        onCardClick={ handleCardClick }
      />
      <Footer/>
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={ isEditProfilePopupOpen }
        onClose={ closeAllPopups }
      >
        <input type="text" placeholder="Имя" name="name" className="popup__input-text popup__input-text_name"
            minLength="2" maxLength="40" required/>
        <span className="popup__error popup__error_name">Введите имя</span>
        <input type="text" placeholder="Род занятий" name="description"
            className="popup__input-text popup__input-text_description" minLength="2" maxLength="200" required/>
          <span className="popup__error popup__error_description">Введите род
            занятий</span>
      </PopupWithForm>
      <PopupWithForm 
        name="card"
        title="Новое место"
        isOpen={ isAddPlacePopupOpen }
        onClose={ closeAllPopups }
      >
      <input type="text" placeholder="Название" name="name" className="popup__input-text popup__input-text_title"
            minLength="2" maxLength="30" required/>
          <span
            className="popup__error popup__error_name"
          >
            Заполните это поле
          </span>
          <input type="url" placeholder="Сыылка на картинку" name="link"
            className="popup__input-text popup__input-text_link" required/>
          <span className="popup__error popup__error_link">Введите URL картинки</span>
      </PopupWithForm>
      <PopupWithForm name="delete" title="Вы уверены?" submitText="Да" onClose={ closeAllPopups }/>
      <PopupWithForm 
        name="update-avatar"
        title="Обновить аватар"
        isOpen={ isEditAvatarPopupOpen }
        onClose={ closeAllPopups }
      >
      <input type="url" placeholder="Ссылка на аватарку..." name="avatar" className="popup__input-text" required/>
          <span className="popup__error popup__error_avatar">Введите URL аватарки</span>
      </PopupWithForm>
      <ImagePopup 
        card={ selectedCard }
        isOpen={ isImagePopupOpen }
        onClose={ closeAllPopups }
      />
  </div>

  );
}

export default App;
