import { takeLatest, call, put, all } from 'redux-saga/effects';
import { notification } from 'antd';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  try {
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
      notification.error({
        message: 'Authentication failure!',
        description: 'Please, check you credentials!',
      });
      yield put(signInFailure());
      return;
    }

    const { token, username, role, avatar } = response.data[0];
    const user = {
      username,
      role,
      avatar,
    };
    // Temporary - JSON Server {END}

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    notification.error({
      message: 'Authentication failure!',
      description: 'Please, check you credentials!',
    });
    yield put(signInFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
