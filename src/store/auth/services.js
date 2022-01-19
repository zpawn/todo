import { authService } from '../../services';

const signInService = (email, password) => {
    return authService('signInWithPassword', { body: { email, password }})
        .then(res => ({
            expiresIn: res.expiresIn * 1000,
            idToken: res.idToken,
            refreshToken: res.refreshToken,
        }))
}

const signUpService = (email, password) => {
    return authService('signUp', { body: { email, password }})
        .then(res => {
            console.log('[SIGN_UP_SERVICE]', res)
        })
}

const refreshTokenService = () => {
    const config = {
        url: 'https://securetoken.googleapis.com/v1/token?key=AIzaSyBw3JP8xB2reFxjCiGnsqLJUDtg3M5cvF0',
        body: {
            grant_type: 'refresh_token',
            refresh_token: '<idToken>'
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };
}

export { signInService, signUpService, refreshTokenService };
