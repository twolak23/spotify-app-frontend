import { Fragment, useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const onUsernameChange = (e) => {
    setUsername(e.target.value)
  }
  const onPasswordChange = (e) => {
    setPassword(e.target.value)
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
        <button type="submit" onSubmit={onSubmit}>Log In</button>
      </form>
    </Fragment>);
}

export default LoginPage;