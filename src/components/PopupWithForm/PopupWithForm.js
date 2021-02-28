import React from 'react';

function PopupWithForm({title, name, submitText='Сохранить', children, isOpen, onClose, onSubmit}) {
  return (
    <section className={ `popup popup_type-${name} ${ isOpen ? 'popup_is-opened' : '' }` }>
      <div className="popup__container">
        <button onClick={ onClose } type="button" className="popup__close"></button>
        <h3 className="popup__title">{title}</h3>
        <form 
          name={name}
          // onSubmit={ onSubmit }
          className={`popup__input-form popup__input-form_type-${name}`} 
          noValidate>
            { children }
            <button 
              type="submit" 
              form={ name }
              onClick={ onSubmit }
              className={`popup__input-btn popup__input-btn_type-${name}`}>
              { submitText }
            </button>
        </form>
      </div>
    </section>
  )
}

export default PopupWithForm;