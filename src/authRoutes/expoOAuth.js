import * as AppAuth from 'expo-app-auth';

// usage : https://docs.expo.io/versions/latest/sdk/app-auth/
let config = {
  behavior: 'web',
  issuer: 'https://accounts.google.com',
  scopes: ['openid', 'profile'],

  clientId: 'secret id',

};

export const oAuth = async (type) => {
  let response = await AppAuth.authAsync(config);
  //const token = await (await AppAuth.authAsync(config)).idToken
  response = { token: response.idToken };
  return response;
};
