import { Button } from "react-bootstrap";
import styled from "styled-components";

const spotifyGreenColor = '#1db954'
const spotifyGreyColor = '#535353'

export const SpotifyGreenBackgroundWhiteTextButton = styled(Button)`
      background-color: ${spotifyGreenColor};
      color: white;
      border-color: ${spotifyGreenColor};

    &:hover {
      background-color: white;
      color: ${spotifyGreenColor};
      border-color: ${spotifyGreenColor};
    }
`
export const SpotifyWhiteBackgroundGreenTextButton = styled(Button)`
    background-color: white;
    color: ${spotifyGreenColor};
    
    &:hover {
      background-color: ${spotifyGreenColor};
      color: white;
    }
`
export const SpotifyGreyBackgroundWhiteTextButton = styled(Button)`
    background-color: ${spotifyGreyColor};
    color: white;
    border-color: ${spotifyGreyColor};

    &:hover {
      background-color: white;
      color: ${spotifyGreyColor};
      border-color: ${spotifyGreyColor};
    }
`
