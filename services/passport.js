const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/keys.js');

passport.use(
    new GoogleStrategy({
        clientID:keys.googleClientID,
        clientSecret:keys.googleClientSecret,
        callbackURL:'/auth/google/callback'
    },(accessToken,refreshToken,profile,done)=>{
        console.log('aceess token',accessToken);
        console.log('refresh token',refreshToken);
        console.log('profile:',profile);
    })
);
//passport.use(new FacebookStrategy());
