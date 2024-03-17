import { Fragment } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const GoBackButton = () => {
  const navigate = useNavigate()
  return (<Fragment>
    <Button onClick={() => navigate(-1)}>Go back</Button>
  </Fragment>);
}

export default GoBackButton;