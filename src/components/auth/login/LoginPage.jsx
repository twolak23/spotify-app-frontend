import { Fragment, useState } from "react";
import { Button, Form } from "react-bootstrap";
import GoBackButton from "../../misc/GoBackButton";
import GoToStartPageButton from "../../misc/GoToStartPageButton";

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
      <Form>
        <Form.Group controlId="login.usernameFormGroup">
          <label>Username</label>
          <input type="text" value={username} onChange={onUsernameChange} />
        </Form.Group>
        <Form.Group controlId="login.passwordFormGroup">
          <label for="passwordInput">Password</label>
          <input id="passwordInput" type="password" value={password} onChange={onPasswordChange} />
        </Form.Group>
        <Button type="submit" onSubmit={onSubmit}>Log In</Button>
        <GoBackButton />
        <GoToStartPageButton />
      </Form>
    </Fragment>);
}

export default LoginPage;