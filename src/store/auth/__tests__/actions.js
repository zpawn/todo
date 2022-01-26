import { actions, setToken, removeToken } from '../actions';

describe('auth actions', () => {
  test('action setToken', () => {
    const payload = { token: 'testToken', refreshToken: 'testRefresh' };
    expect(setToken(payload)).toEqual({ type: actions.SET_TOKEN, payload });
  });

  test('action removeToken', () => {
    expect(removeToken()).toEqual({ type: actions.REMOVE_TOKEN });
  });
});
