import { reducer } from '../reducer';
import { setToken, removeToken } from '../actions';

const initState = {
  token: null,
  refreshToken: null,
};

describe('auth reducers', () => {
  test('should return initial state by default', () => {
    expect(reducer(undefined, { type: '@@INIT' })).toEqual(initState);
  });

  test('should handle set token', () => {
    const payload = { token: 'testToken', refreshToken: 'testRefreshToken' };

    expect(reducer(initState, setToken(payload))).toEqual({
      token: 'testToken',
      refreshToken: 'testRefreshToken',
    });
  });

  test('should handle remove token', () => {
    expect(reducer(initState, removeToken())).toEqual({
      token: null,
      refreshToken: null,
    });
  });
});
