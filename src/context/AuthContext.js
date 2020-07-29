import { AsyncStorage } from 'react-native';
import buildContext from './buildContext';
import { dummyAuth as request, oAuth } from '../authRoutes/dummyAuth';
//import { firebaseReq as request } from '../authRoutes/firebaseRestApi';
//import { firebaseReq as request } from '../authRoutes/firebaseSDK';
//import { oAuth } from '../authRoutes/expoOAuth';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'error':
      return { ...state, errorMessage: action.payload };
    case 'auth':
      return { errorMessage: '', token: action.payload };
    case 'signout':
      return { errorMessage: '', token: null };
    default:
      return state;
  }
};

const localAuth = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  token && dispatch({ type: 'auth', payload: token });
};

const remoteOAuth = dispatch => async (type) => {
  const response = await oAuth(type);
  (!response.token) ? (
    dispatch({ type: 'error', payload: 'Something went wrong!' })
    //console.log(response)
  ) : (
      await AsyncStorage.setItem('token', response.token),
      dispatch({ type: 'auth', payload: response.token }),
      dispatch({ type: 'error', payload: '' })
      //console.log(response.token)
    );
};

const remoteAuth = dispatch => async (type, email, password) => {
  const response = await request(type, email, password);
  (!response.token) ? (
    dispatch({ type: 'error', payload: response })
    //console.log(response)
  ) : (
      await AsyncStorage.setItem('token', response.token),
      dispatch({ type: 'auth', payload: response.token }),
      dispatch({ type: 'error', payload: '' })
      //console.log(response.token)
    );
};

const signout = dispatch => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
};

export const { Provider, Context } = buildContext(
  authReducer,
  { localAuth, remoteAuth, signout, remoteOAuth },
  { token: null, errorMessage: '' }
);
