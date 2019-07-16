import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  // const response = yield call(api.post, 'sessions', {
  //   email,
  //   password,
  // });

  // Temporary - JSON Server {BEGIN}
  const response = yield call(
    api.get,
    `user?email=${email}&password=${password}`
  );

  if (!response.data.length) {
    console.tron.error('Usuário não encontrado!');
    return;
  }

  const { token, username, role } = response.data[0];
  const user = {
    username,
    role,
  };
  // Temporary - JSON Server {END}
  yield put(signInSuccess(token, user));

  history.push('/dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
