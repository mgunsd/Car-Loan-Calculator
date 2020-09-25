import axios from 'axios';

export const firebaseReq = async (type, email, password) => {
  const t = (type == 'signup') ? 'signUp' : 'signInWithPassword';
  try {
    const response = await axios({
      baseURL: 'https://identitytoolkit.googleapis.com/v1',
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      url: `accounts:${t}`,
      params: {
        key: 'my secret key'
      },
      data: {
        email: email,
        password: password,
        returnSecureToken: true
      },
    });
    response.data = { token: response.data.idToken };
    return response.data;

  } catch (error) {
    //let message = error.response.data.error.message
    let message = 'Something went wrong!';
    const errCode = error.response.data.error.message;
    switch (errCode) {
      case 'EMAIL_EXISTS':
        return message = 'This email is already exists! ';
      case 'EMAIL_NOT_FOUND':
        return message = 'This email could not be found!';
      case 'INVALID_PASSWORD':
        return message = 'This password is not valid!'
      case 'INVALID_EMAIL':
        return message = 'Please enter a valid email!';
      case 'MISSING_PASSWORD':
        return message = 'Password field can not be empty!';
      case 'WEAK_PASSWORD : Password should be at least 6 characters':
        return message = 'Password should be at least 6 characters!';
      default:
        return message;
    }
  };

};