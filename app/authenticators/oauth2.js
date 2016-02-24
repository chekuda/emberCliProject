//This is going to be for identify sessions
//this send the users credentials to the server and valid
//to define the server used=> ember generate server

import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend();