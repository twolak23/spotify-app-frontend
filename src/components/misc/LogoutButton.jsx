import { SpotifyGreenBackgroundWhiteTextButton } from "./SpotifyCustomButton";
import { useAuth } from "react-oidc-context";

const LogoutButton = (props) => {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "5f0sqr2ikso34724ba4krl9ef6";
    const logoutUri = "http://localhost:3000/";
    const cognitoDomain = "https://eu-north-1cfklqmu90.auth.eu-north-1.amazoncognito.com";
    auth.removeUser();
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
    
  };

  // const logout = () => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   const username = user["username"];

  //   const logoutOperation = del({
  //     apiName: 'SpotifyAPI',
  //     path: '/logout/' + username
  //   });
  //   logoutOperation.response
  //     .then((res) => {
  //       return res.body.json().then((data) => {
  //         const items = data;
  //         console.log('DELETE Call Succeeded', items);
  //         localStorage.clear();
  //         alert("You are logged out");
  //         navigate("/");
  //         return data;
  //       })
  //     })
  //     .catch((error) => {
  //       console.log('DELETE Call Failed');
  //       return error;
  //     });
  // }
  return (<SpotifyGreenBackgroundWhiteTextButton onClick={signOutRedirect}>Logout</SpotifyGreenBackgroundWhiteTextButton>);
}

export default LogoutButton;