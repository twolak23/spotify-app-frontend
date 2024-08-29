import { Fragment } from "react"
import { Link } from "react-router-dom"
import SpotifyNavbar from "../misc/SpotifyNavbar";
import { SpotifyGreenBackgroundWhiteTextButton } from "../misc/SpotifyCustomButton";


const StartPage = () => {
  return (
    <Fragment>
      <SpotifyNavbar/>
      {!localStorage.getItem("user")
      ? <>
          <Link to="/register"><SpotifyGreenBackgroundWhiteTextButton variant='success'>Register</SpotifyGreenBackgroundWhiteTextButton></Link>
          <Link to="/login"><SpotifyGreenBackgroundWhiteTextButton variant='success'>Login</SpotifyGreenBackgroundWhiteTextButton></Link>
        </>
        :
        <Link to="/dashboard"><SpotifyGreenBackgroundWhiteTextButton variant='success'>Dashboard</SpotifyGreenBackgroundWhiteTextButton> </Link>
    }
    </Fragment>
  )
}
export default StartPage;