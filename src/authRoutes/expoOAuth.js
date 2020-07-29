import * as AppAuth from 'expo-app-auth';

// usage : https://docs.expo.io/versions/latest/sdk/app-auth/
let config = {
  behavior: 'web',
  issuer: 'https://accounts.google.com',
  scopes: ['openid', 'profile'],
  //androidClientId: '276413673414-ejj6v7cmbqqpelvnejl51bhtc6bd2tb9.apps.googleusercontent.com',
  //iosClientId: '276413673414-vkd25i1q222evajutjp12gbp6sbqc770.apps.googleusercontent.com',
  /* This is the CLIENT_ID generated from a Firebase project */
  clientId: '276413673414-vkd25i1q222evajutjp12gbp6sbqc770.apps.googleusercontent.com',

  //android : 276413673414-ejj6v7cmbqqpelvnejl51bhtc6bd2tb9.apps.googleusercontent.com
  //ios : 276413673414-vkd25i1q222evajutjp12gbp6sbqc770.apps.googleusercontent.com
  //web clientId: '556870027643-94huqld8o5tf7knr9uc0p1h5an6kit4v.apps.googleusercontent.com',
};

export const oAuth = async (type) => {
  let response = await AppAuth.authAsync(config);
  //const token = await (await AppAuth.authAsync(config)).idToken
  response = { token: response.idToken };
  return response;
};
