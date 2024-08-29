
export default class InputValidator {
    constructor() {
        this.emailRegex = /[A-Za-z0-9]+[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/g; //eslint-disable-line
        this.passwordRegex = /[A-Za-z0-9\._%&@]{6,}/g; //eslint-disable-line
        this.usernameRegex = /[A-Za-z]+[A-Za-z0-9]{3,}/g; //eslint-disable-line
    }
    validateEmail = (email) => {
        return email.match(this.emailRegex) !== null;
    }

    // password must have at least 6 characters long, can have special characters: .,_,%,&,@
    validatePassword = (password) => {
        return password.match(this.passwordRegex) !== null;
    }

    // username must be at least 4 characters long, have no special characters and start with a letter
    validateUsername = (username) => {
        return username.match(this.usernameRegex) !== null;
    }
}