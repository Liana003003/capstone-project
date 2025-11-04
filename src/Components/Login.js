function Login() {
  return (
    <>
     <section id="green-header-container">
        <div className="green-header">
          <h1>Login</h1>
        </div>
      </section>
      <section id="reservation-form-container">
      <div className="reservation-form-box">
        <form className="reservation-form">
          <label htmlFor="res-name"> Name *</label>
          <input type="text" id="res-name" name="res-name" required />
          <label htmlFor="res-password">Password *</label>
          <input type="password" id="res-password" name="res-password" required />
          <label htmlFor="res-password">Retype Password *</label>
          <input type="password" id="res-password" name="res-password" required />
          </form>
      </div>
      <div className="button-form-container">
      <button type="submit" className="reservation-submit-button">Confirm</button>
      </div>
      </section>
    </>
  );
}

export default Login;