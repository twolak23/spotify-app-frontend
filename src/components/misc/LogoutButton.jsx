import { del } from "@aws-amplify/api";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const LogoutButton = (props) => {
    const navigate = useNavigate();

    const logout = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        const username = user["username"];

        const logoutOperation = del({
            apiName: 'SpotifyAPI',
            path: '/logout/'+username
          });
          logoutOperation.response
            .then((res) => {
              return res.body.json().then((data) => {
                const items = data;
                console.log('DELETE Call Succeeded', items);
                localStorage.clear();
                alert("You are logged out");
                navigate("/login");
                return data;
              })})
            .catch((error) => {
              console.log('DELETE Call Failed');
              return error;
            });
            
    }
    return ( <Button onClick={() => logout()}>Logout</Button> );
}
 
export default LogoutButton;