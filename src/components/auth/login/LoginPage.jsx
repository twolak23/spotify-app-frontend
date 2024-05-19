import { Fragment, useState } from "react";
import { Button, Form } from "react-bootstrap";
import GoBackButton from "../../misc/GoBackButton";
import GoToStartPageButton from "../../misc/GoToStartPageButton";
import { post } from 'aws-amplify/api';
import { useNavigate } from "react-router";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const onUsernameChange = (e) => {
    setUsername(e.target.value)
  }
  const onPasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const body = {
      user: {
        username: username,
        password: password
      }
    }
    const loginOperation = post({
      apiName: 'SpotifyAPI',
      path: '/authorize',
      options: {
        body: body
      }
    });
    const loggedUser = loginOperation.response
      .then((res) => {
        console.log('POST Call Succeeded:');
        return res.body.json().then((data) => {
          const items = data;
          items.username=username;
          console.log('items:', items);
          localStorage.setItem("user", JSON.stringify(items));
          alert("User is logged in");
          navigate('/dashboard');
          setUsername("");
          setPassword("");
          return data;
        });
      })
      .catch((error) => {
        console.log('POST Call Failed:');
        console.log(error);
        alert("Login failed");
        return error;
      });
  }
  return (
    <Fragment>
      <Form>
        <Form.Group controlId="login.usernameFormGroup">
          <label htmlFor="usernameInput">Username</label>
          <input id="usernameInput" type="text" value={username} onChange={onUsernameChange} />
        </Form.Group>
        <Form.Group controlId="login.passwordFormGroup">
          <label htmlFor="passwordInput">Password</label>
          <input id="passwordInput" type="password" value={password} onChange={onPasswordChange} />
        </Form.Group>
        <Button type="submit" onClick={e => onSubmit(e)}>Log In</Button>
        {GoBackButton()}
        {GoToStartPageButton()}
      </Form>
    </Fragment>);
}

export default LoginPage;