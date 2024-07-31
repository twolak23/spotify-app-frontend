import { Fragment, useState } from "react";
import { Button, Form } from "react-bootstrap";
import GoBackButton from "../../misc/GoBackButton";
import GoToStartPageButton from "../../misc/GoToStartPageButton";
import { ApiError, post } from 'aws-amplify/api';
import { useNavigate } from "react-router";
import styled from "styled-components";
import { SpotifyGreenBackgroundWhiteTextButton } from "../../misc/SpotifyCustomButton";


const LoginForm = styled(Form)`

  .form-label .form-control {
    display: inline,
  }
  * {
    margin: 0.1em
  }

`

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
    if(username === '' || password==='') {
      alert("Username or password is empty");
      return;
    }
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
        if (error instanceof ApiError) {
          if (error.response) {
            const { 
              statusCode, 
              headers, 
              body 
            } = error.response;
            console.error(`Received ${statusCode} error response with payload: ${body}`);
            console.log('POST Call Failed:');
            alert(`Login failed: ${body}`);
            return error;
          }
        }
      });
  }
  return (
    <Fragment>
      <LoginForm>
        <Form.Group controlId="login.usernameFormGroup">
          <label htmlFor="usernameInput">Username</label>
          <input id="usernameInput" type="text" required value={username} onChange={onUsernameChange} />
        </Form.Group>
        <Form.Group controlId="login.passwordFormGroup">
          <label htmlFor="passwordInput">Password</label>
          <input id="passwordInput" type="password" required value={password} onChange={onPasswordChange} />
        </Form.Group>
        <SpotifyGreenBackgroundWhiteTextButton type="submit" onClick={e => onSubmit(e)}>Log In</SpotifyGreenBackgroundWhiteTextButton>
        <GoBackButton/>
        <GoToStartPageButton/>
      </LoginForm>
    </Fragment>);
}

export default LoginPage;