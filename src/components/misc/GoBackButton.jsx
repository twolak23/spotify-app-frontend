import { Fragment } from "react";
import { useNavigate } from "react-router";
import { SpotifyGreyBackgroundWhiteTextButton } from "./SpotifyCustomButton";

const GoBackButton = () => {
  const navigate = useNavigate()
  return (<Fragment>
    <SpotifyGreyBackgroundWhiteTextButton onClick={() => navigate(-1)}>Go back</SpotifyGreyBackgroundWhiteTextButton>
  </Fragment>);
}

export default GoBackButton;