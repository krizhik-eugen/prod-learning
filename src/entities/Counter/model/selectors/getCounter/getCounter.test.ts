import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    test('should return counter state', () => {
        const mockState: DeepPartial<StateSchema> = {
            counter: { value: 7 },
        };

        expect(getCounter(mockState as StateSchema)).toEqual({ value: 7 });
    });
});
