import { Fragment } from "react"
import { Link } from "react-router-dom"
import SpotifyNavbar from "../misc/SpotifyNavbar";
import { SpotifyGreenBackgroundWhiteTextButton } from "../misc/SpotifyCustomButton";
import { useAuth } from "react-oidc-context";
import Dashboard from "../dashboard/Dashboard";

const StartPage = () => {
  const auth = useAuth();

  if(auth.isAuthenticated) {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
  return (
    <Fragment>
      <SpotifyNavbar />
      <Link to="/register"><SpotifyGreenBackgroundWhiteTextButton variant='success'>Register</SpotifyGreenBackgroundWhiteTextButton></Link>
      <Link to="/login"><SpotifyGreenBackgroundWhiteTextButton variant='success'>Login</SpotifyGreenBackgroundWhiteTextButton></Link>
    <SpotifyGreenBackgroundWhiteTextButton onClick={() => auth.signinRedirect()} variant='success'>Register/Login (cognito)</SpotifyGreenBackgroundWhiteTextButton>
    </Fragment>
  )
}
export default StartPage;