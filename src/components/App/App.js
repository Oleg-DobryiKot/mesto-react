import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup';
import EditAvatarPopup from '../EditAvatarPopup/EditAvatarPopup';
import ImagePopup from '../ImagePopup/ImagePopup';
import api from '../../utils/api'
import { useState, useEffect } from 'react';
import 'react-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
 
  useEffect(() => {
    api.getUserInfo()
      .then(setCurrentUser)
      .catch(console.error);
  }, []);

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

  function handleUpdateUser(UserData) {
    api.sendUserInfo(UserData)
      .then(setCurrentUser)
      .catch(console.error);
    setIsEditProfilePopupOpen(false);
  }

  function handleUpdateAvatar(UserData) {
    api.editAvatar(UserData)
      .then(setCurrentUser)
      .catch(console.error);
    setIsEditAvatarPopupOpen(false);
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
      <CurrentUserContext.Provider value={currentUser}>
      <Header/>
      <Main
        onEditProfile={ handleEditProfileClick }
        onAddPlace={ handleAddPlaceClick }
        onEditAvatar={ handleEditAvatarClick }
        onCardClick={ handleCardClick }
      />
      <Footer/>
      <EditProfilePopup 
        isOpen={ isEditProfilePopupOpen }
        onClose={ closeAllPopups }
        onUpdateUser={ handleUpdateUser }
      /> 
      <PopupWithForm 
        name="card"
        title="Новое место"
        isOpen={ isAddPlacePopupOpen }
        onClose={ closeAllPopups }
      >
        <input 
          type="text"
          placeholder="Название"
          name="name"
          className="popup__input-text popup__input-text_title"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__error popup__error_name">Заполните это поле</span>
        <input 
          type="url"
          placeholder="Сыылка на картинку"
          name="link"
          className="popup__input-text popup__input-text_link"
          required
        />
        <span className="popup__error popup__error_link">Введите URL картинки</span>
      </PopupWithForm>
      <PopupWithForm 
        name="delete"
        title="Вы уверены?"
        submitText="Да"
        onClose={ closeAllPopups }
      />
      <EditAvatarPopup 
        isOpen={ isEditAvatarPopupOpen }
        onClose={ closeAllPopups }
        onUpdateAvatar={ handleUpdateAvatar }
      />
      <ImagePopup 
        card={ selectedCard }
        isOpen={ isImagePopupOpen }
        onClose={ closeAllPopups }
      />
      </CurrentUserContext.Provider>
  </div>

  );
}

export default App;
