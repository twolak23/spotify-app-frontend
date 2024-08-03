export default class TokenValidator {
    validateUserValid = () => {
        const user = localStorage.getItem("user")
        if(!user) return false;
        const tokenExpireTime = user["expiresAt"];
        return Math.floor(Date.now().valueOf() / 1000) < tokenExpireTime;
    }
}