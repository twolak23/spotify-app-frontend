import { Fragment, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import SpotifyNavbar from "../misc/SpotifyNavbar";
import { SpotifyGreenBackgroundWhiteTextButton } from "../misc/SpotifyCustomButton";
import TokenValidator from "../../utils/TokenValidator";
import { post } from "aws-amplify/api";


const StartPage = () => {
  const navigate = useNavigate();
  const tokenValidator = new TokenValidator();
  let validateUserResult = tokenValidator.validateUser();

  useEffect(() => {
    if (validateUserResult === 'exists') {
      navigate('/dashboard');
    }
  }, [])

  const onRefresh = (e) => {
    e.preventDefault();
    const username = JSON.parse(localStorage.getItem("user"))["username"];
    const body = {
      username: username
    }
    const refreshOperation = post({
      apiName: 'SpotifyAPI',
      path: '/authorize/refresh-token',
      options: {
        body: body
      }
    });
    const refreshResponse = refreshOperation.response
      .then((res) => {
        console.log('POST Call Succeeded:');
        return res.body.json().then((data) => {
          const items = data;
          items.username = username;
          console.log('items:', items);
          localStorage.setItem("user", JSON.stringify(items));
          navigate('/dashboard');
          return data;
        });
      }).catch((err) => {
        console.log(err);
      })
  }
  const onReturn = (e) => {
    e.preventDefault();
    localStorage.clear();
    validateUserResult = 'not_exists';
    navigate(0);
  }
  return (
    <Fragment>
      <SpotifyNavbar />
      {validateUserResult === 'exists_expired' ?
        <>
          <p>Sorry, your session is expired. You can either <a href="#" onClick={e => onRefresh(e)}>refresh the session</a> or <a href="#" onClick={e => onReturn(e)}>return to home page</a> </p>
        </> :
        <>
          <Link to="/register"><SpotifyGreenBackgroundWhiteTextButton variant='success'>Register</SpotifyGreenBackgroundWhiteTextButton></Link>
          <Link to="/login"><SpotifyGreenBackgroundWhiteTextButton variant='success'>Login</SpotifyGreenBackgroundWhiteTextButton></Link>
        </>
      }
    </Fragment>
  )
}
export default StartPage;