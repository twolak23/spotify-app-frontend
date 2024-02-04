import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const GoToStartPageButton = () => {
  const navigate = useNavigate()
  return (
    <Button onClick={() => navigate("/")}>Go to start page</Button>
  );
}

export default GoToStartPageButton;