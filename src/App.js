
import './App.css';

function App() {
  return (
    <>
    <div className="page">
    <header className="header">
      <img
        className="header__logo"
        src="/images/logo/logo.svg"
        alt="Логотип"
      />
    </header>

    <main className="content">

      <section className="profile">
        <div className="profile__overlay">
          <img className="profile__avatar" src="<%=require('./images/avatar-jacue-iv-custo.jpg')%>" alt="Фото профиля"/>
        </div>
        <div className="profile__info">
          <div className="profile__edit">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button type="button" className="profile__edit-btn"></button>
          </div>
          <p className="profile__description">Исследователь океана</p>
        </div>
        <button type="button" className="profile__add-btn"></button>
      </section>

      <section className="elements">

      </section>

    </main>

    <section className="popup popup_type-profile">
      <div className="popup__container">
        <button type="button" className="popup__close"></button>
        <h3 className="popup__title">Редактировать профиль</h3>
        <form name="inputFormProfile" className="popup__input-form popup__input-form_type-profile" novalidate>
          <input type="text" placeholder="Имя" name="name" className="popup__input-text popup__input-text_name"
            minlength="2" maxlength="40" required/>
          <span className="popup__error popup__error_name">Введите имя</span>
          <input type="text" placeholder="Род занятий" name="description"
            className="popup__input-text popup__input-text_description" minlength="2" maxlength="200" required/>
          <span className="popup__error popup__error_description">Введите род
            занятий</span>
          <button type="submit" className="popup__input-btn popup__input-btn_type-profile">
            Сохранить
          </button>
        </form>
      </div>
    </section>

    <section className="popup popup_type-card">
      <div className="popup__container">
        <button type="button" className="popup__close"></button>
        <h3 className="popup__title">Новое место</h3>
        <form name="inputFormCard" className="popup__input-form popup__input-form_type-card" novalidate>
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
          <button type="submit" className="popup__input-btn popup__input-btn_type-card">
            Сохранить
          </button>
        </form>
      </div>
    </section>

    <section className="popup popup_type-image">
      <div className="popup__container popup__container_type-image">
        <button type="button" className="popup__close"></button>
        <img className="popup__fullpic" src="#" alt="#"/>
        <h3 className="popup__title popup__title_type-image">Тестовое название</h3>
      </div>
    </section>

    <section className="popup popup_type-delete">
      <div className="popup__container popup__container_type-delete">
        <button type="button" className="popup__close"></button>
        <h3 className="popup__title">Вы уверены?</h3>
        <form name="confirmFormDelete" className="popup__input-form popup__input-form_type-delete" novalidate>
          <button type="submit" className="popup__input-btn popup__input-btn_type-delete">
            Да
          </button>
        </form>
      </div>
    </section>
    
    <section className="popup popup_type-update-avatar">
      <div className="popup__container popup__container_type-update-avatar">
        <button type="button" className="popup__close"></button>
        <h3 className="popup__title">Обновить аватар</h3>
        <form name="updateFormAvatar" className="popup__input-form popup__input-form_type-update-avatar" novalidate>
          <input type="url" placeholder="Ссылка на аватарку..." name="avatar" className="popup__input-text" required/>
          <span className="popup__error popup__error_avatar">Введите URL аватарки</span>
          <button type="submit" className="popup__input-btn popup__input-btn_type-update-avatar">
            Сохранить
          </button>
        </form>
      </div>
    </section>
    
    <footer className="footer">
      <p className="footer__copyright">&copy; 2020. Матвеев Олег</p>
    </footer>
  </div>

  <template id="cardTemplate">
    <div className="element">
      <img className="element__image" src="<%=require('./images/element-dombai.jpg')%>" alt="Домбай"/>
      <div className="element__description">
        <h3 className="element__title">Домбай</h3>
        <button type="button" className="element__trash-icon"></button>
        <div className="element__likes">
          <button type="button" className="element__like-icon"></button>
          <span className="element__like-count">0</span>
        </div>
      </div>
    </div>
  </template>
  </>
  );
}

export default App;
