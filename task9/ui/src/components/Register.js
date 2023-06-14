export default function Register() {
  return (
    <>
      <form className="form">
        <div className="input-box">
          <input
            className="input-field"
            type="text"
            name="username"
            placeholder="Username"
          />
        </div>
        <div className="input-box">
          <input
            className="input-field"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="input-box">
          <input
            className="input-field"
            type="password"
            name="password"
            placeholder="********"
          />
        </div>
        <button className="button">Register</button>
      </form>
    </>
  );
}
