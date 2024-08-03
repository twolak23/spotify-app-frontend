import { Fragment, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import GoBackButton from "../../misc/GoBackButton";
import { ApiError, post } from 'aws-amplify/api';
import InputValidator from "../../../utils/InputValidator";
import { SpotifyGreenBackgroundWhiteTextButton } from "../../misc/SpotifyCustomButton";


const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [createdUser, setCreatedUser] = useState({});

  const navigate = useNavigate();
  const validator = new InputValidator();

  useEffect(() => {
    localStorage.setItem("user", createdUser);
  }, [createdUser]);

  const onUsernameChange = (e) => {
    setUsername(e.target.value)
  }
  const onPasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const body = {
      user: {
        username: username,
        password: password,
        email: email
      }
    }
    if(!validator.validateEmail(email) || !validator.validateUsername(username) || !validator.validatePassword(password)){
      alert("Register failed")
      return;
    }
    const registerOperation = post({
      apiName: 'SpotifyAPI',
      path: '/register',
      options: {
        body: body
      }
    });
    const createdUser = registerOperation.response
      .then((res) => {
        console.log('POST Call Succeeded:');
        return res.body.json().then((data) => {
          console.log('createdUser: ', createdUser);
          localStorage.setItem("user", JSON.stringify(createdUser));
          alert("User is created");
          setUsername("")
          setPassword("")
          setEmail("")
          setCreatedUser({})
          navigate('/dashboard')
          const items = data;
          console.log('items:', items)
          setCreatedUser(items);
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
      })
  }
  return (
    <Fragment>
      <Form>
        <Form.Group controlId="register.usernameFormGroup">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" value={username} onChange={onUsernameChange} />
        </Form.Group>
        <Form.Group controlId="register.passwordFormGroup">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={onPasswordChange} />
        </Form.Group>
        <Form.Group controlId="register.emailFormGroup">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={onEmailChange} />
        </Form.Group>
        <SpotifyGreenBackgroundWhiteTextButton type="submit" onClick={e => onSubmit(e)}>Register</SpotifyGreenBackgroundWhiteTextButton>
        {GoBackButton()}
      </Form>
    </Fragment>);
}

export default RegisterPage;