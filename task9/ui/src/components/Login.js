export default function Login() {
  return (
    <>
      <form className="form">
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
        <button className="button">Login</button>
      </form>
    </>
  );
}
