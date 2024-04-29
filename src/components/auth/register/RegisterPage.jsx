import { Fragment, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router";
import GoBackButton from "../../misc/GoBackButton";
import { post } from 'aws-amplify/api';

const RegisterPage = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [createdUser, setCreatedUser] = useState({});

  const navigate = useNavigate();

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
          const items = data;
          console.log('items:', items)
          setCreatedUser(items);
          return data;
        });
      })
      .catch((error) => {
        console.log('POST Call Failed:');
        return error;
      })
    console.log('createdUser: ', createdUser);
    localStorage.setItem("user", JSON.stringify(createdUser));
    alert("User is created");
    setUsername("")
    setPassword("")
    setEmail("")
    setCreatedUser({})
    navigate('/dashboard')
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
        <Button type="button" onClick={e => onSubmit(e)}>Register</Button>
        {GoBackButton()}
      </Form>
    </Fragment>);
}

export default RegisterPage;