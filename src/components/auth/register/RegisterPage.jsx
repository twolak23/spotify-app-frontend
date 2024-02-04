import { Fragment, useState } from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router";
import GoBackButton from "../../misc/GoBackButton";

const RegisterPage = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

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
        <Button type="submit" onSubmit={onSubmit}>Register</Button>
        <GoBackButton />
      </Form>
    </Fragment>);
}

export default RegisterPage;