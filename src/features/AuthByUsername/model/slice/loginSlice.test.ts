import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUsername';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'test username' };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('test username'))).toEqual({ username: 'test username' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { username: 'test password' };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('test password'))).toEqual({ username: 'test password' });
    });
});
