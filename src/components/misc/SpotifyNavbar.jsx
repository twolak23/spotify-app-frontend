import styled from 'styled-components';
import { SpotifyWhiteBackgroundGreenTextButton } from './SpotifyCustomButton';
import { Navbar } from 'react-bootstrap';

function SpotifyNavbar(props) {
    const spotifyBackgroundColor = '#1db954'
    const NavbarDiv = styled(Navbar)({
        // size
        width: '100%',
        height: '5em',
        // coloring
        backgroundColor: spotifyBackgroundColor
        // placement

    })
    return ( <NavbarDiv>

        <SpotifyWhiteBackgroundGreenTextButton variant='outline-light'>Test button</SpotifyWhiteBackgroundGreenTextButton>
        <SpotifyWhiteBackgroundGreenTextButton variant='outline-light'>Test button</SpotifyWhiteBackgroundGreenTextButton>
        
        <SpotifyWhiteBackgroundGreenTextButton variant='outline-light'>Test button</SpotifyWhiteBackgroundGreenTextButton>
        <SpotifyWhiteBackgroundGreenTextButton variant='outline-light'>Test button</SpotifyWhiteBackgroundGreenTextButton>
    </NavbarDiv> );
}

export default SpotifyNavbar;