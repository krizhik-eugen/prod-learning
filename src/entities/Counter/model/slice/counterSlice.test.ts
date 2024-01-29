import { CounterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice', () => {
    test('should receive increment action and increase value', () => {
        const mockState: CounterSchema = {
            value: 7,
        };

        expect(counterReducer(mockState, counterActions.increment())).toEqual({ value: 8 });
    });

    test('should receive decrement action and decrease value', () => {
        const mockState: CounterSchema = {
            value: 7,
        };

        expect(counterReducer(mockState, counterActions.decrement())).toEqual({ value: 6 });
    });

    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.decrement())).toEqual({ value: -1 });
    });
});
