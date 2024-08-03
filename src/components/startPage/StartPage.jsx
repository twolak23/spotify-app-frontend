import { Fragment } from "react"
import { Link } from "react-router-dom"
import SpotifyNavbar from "../misc/SpotifyNavbar";
import { SpotifyGreenBackgroundWhiteTextButton } from "../misc/SpotifyCustomButton";
import TokenValidator from "../../utils/TokenValidator";


const StartPage = () => {
  return (
    <Fragment>
      <SpotifyNavbar/>
      {(new TokenValidator()).validateUserValid()
      ? <Link to="/dashboard"><SpotifyGreenBackgroundWhiteTextButton variant='success'>Dashboard</SpotifyGreenBackgroundWhiteTextButton> </Link>
        : 
        <>
          <Link to="/register"><SpotifyGreenBackgroundWhiteTextButton variant='success'>Register</SpotifyGreenBackgroundWhiteTextButton></Link>
          <Link to="/login"><SpotifyGreenBackgroundWhiteTextButton variant='success'>Login</SpotifyGreenBackgroundWhiteTextButton></Link>
        </>
    }
    </Fragment>
  )
}
export default StartPage;