import { Navigate } from "react-router";

const UserCheckWrapper = ({children}) => {
    const userValid = localStorage.getItem("user") && (Object.keys(localStorage.getItem("user")).length !== 0 || new Date(JSON.parse(localStorage.getItem("user"))["expiresAt"]) > new Date())
    return (userValid ? children : <Navigate to="/login" replace/> );
}
 
export default UserCheckWrapper;