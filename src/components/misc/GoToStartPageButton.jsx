import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { SpotifyGreenBackgroundWhiteTextButton, SpotifyGreyBackgroundWhiteTextButton } from "./SpotifyCustomButton";

const GoToStartPageButton = () => {
  const navigate = useNavigate()
  return (
    <SpotifyGreyBackgroundWhiteTextButton onClick={() => navigate("/")}>Go to start page</SpotifyGreyBackgroundWhiteTextButton>
  );
}

export default GoToStartPageButton;