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

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleImageClick() {
    setIsImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <>
    <div className="page">
      <Header/>
      <Main
        onEditProfile={ handleEditProfileClick }
        onAddPlace={ handleAddPlaceClick }
        onEditAvatar={ handleEditAvatarClick }
      />
      <Footer/>
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={ isEditProfilePopupOpen }
        onClose={ closeAllPopups }
      >
        <input type="text" placeholder="Имя" name="name" className="popup__input-text popup__input-text_name"
            minlength="2" maxlength="40" required/>
        <span className="popup__error popup__error_name">Введите имя</span>
        <input type="text" placeholder="Род занятий" name="description"
            className="popup__input-text popup__input-text_description" minlength="2" maxlength="200" required/>
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
            minlength="2" maxlength="30" required/>
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
      <ImagePopup isOpen={ isImagePopupOpen } onClose={ closeAllPopups }/>
  </div>
  </>
  );
}

export default App;
