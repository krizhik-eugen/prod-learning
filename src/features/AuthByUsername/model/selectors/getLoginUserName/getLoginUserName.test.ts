import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUserName } from './getLoginUserName';

describe('getLoginUserName', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'test username',
            },
        };

        expect(getLoginUserName(state as StateSchema)).toEqual('test username');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginUserName(state as StateSchema)).toEqual('');
    });
});
