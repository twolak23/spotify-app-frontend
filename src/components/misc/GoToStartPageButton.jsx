import { useNavigate } from "react-router";
import { SpotifyGreyBackgroundWhiteTextButton } from "./SpotifyCustomButton";

const GoToStartPageButton = () => {
  const navigate = useNavigate()
  return (
    <SpotifyGreyBackgroundWhiteTextButton onClick={() => navigate("/")}>Go to start page</SpotifyGreyBackgroundWhiteTextButton>
  );
}

export default GoToStartPageButton;