export default class TokenValidator {
    validateUser = () => {
        const user = localStorage.getItem("user")
        if(!user) return 'not_exist';

        const tokenExpireTime = JSON.parse(user)["expiresAt"];
        return (Math.floor(Date.now().valueOf() / 1000) < tokenExpireTime) ? 'exists' : 'exists_expired';
    }
}