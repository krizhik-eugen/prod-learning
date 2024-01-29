import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    test('should return counter value', () => {
        const mockState: DeepPartial<StateSchema> = {
            counter: { value: 7 },
        };

        expect(getCounterValue(mockState as StateSchema)).toEqual(7);
    });
});
