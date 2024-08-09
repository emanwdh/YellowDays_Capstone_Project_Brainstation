import './UserForm.scss';

export default function UserForm() {
  return (
    <div className="user-form">
      <h3 className='user-form__title'>Login</h3>
      <form className="user-form__form form">
        <div className="form__input-field user-form__input-field">
          <label className="input-field__label">username</label>
          <input
            className="input-field__input"
            placeholder="Enter your username"
          ></input>
        </div>
        <div className="form__input-field user-form__input-field">
          <label className="input-field__label">password</label>
          <input
            className="input-field__input"
            placeholder="Enter your password"
          ></input>
        </div>
        <button type="submit" className='user-form__button form__button'>Login</button>
      </form>
      <div className="user-form__signup-option signup-option">
        <p className="signup-option__hint signup-option__text">Don't have an account?</p>
        <p className="signup-option__action signup-option__text">Sign up here</p>
      </div>
    </div>
  );
}
