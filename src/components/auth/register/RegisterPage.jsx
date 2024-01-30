import { Fragment, useState } from "react";

const RegisterPage = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const onUsernameChange = (e) => {
    setUsername(e.target.value)
  }
  const onPasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const onSubmit = () => {
    // call api gateway
  }
  return (
    <Fragment>
      <form>
        <div>
          <label for="usernameInput">Username</label>
          <input id="usernameInput" type="text" value={username} onChange={onUsernameChange} />
        </div>
        <div>
          <label for="passwordInput">Password</label>
          <input id="passwordInput" type="password" value={password} onChange={onPasswordChange} />
        </div>
        <div>
          <label for="emailInput">Email</label>
          <input id="emailInput" type="email" value={email} onChange={onEmailChange} />
        </div>
        <button type="submit" onSubmit={onSubmit}>Register</button>
      </form>
    </Fragment>);
}

export default RegisterPage;