import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    const mockState = {
        initialState: {
            counter:
                { value: 7 },
        },
    };

    test('Counter should be visible', () => {
        componentRender(<Counter />, mockState);
        const counterValue = screen.getByTestId('counter-value');
        expect(counterValue).toHaveTextContent('7');
    });
    test('Counter value should be changed after clicking buttons', () => {
        componentRender(<Counter />, mockState);

        const counterValue = screen.getByTestId('counter-value');
        expect(counterValue).toHaveTextContent('7');

        const incrementButton = screen.getByRole('button', { name: 'increment' });
        const decrementButton = screen.getByRole('button', { name: 'decrement' });
        expect(incrementButton).toBeInTheDocument();
        fireEvent.click(incrementButton);
        expect(counterValue).toHaveTextContent('8');
        fireEvent.click(incrementButton);
        expect(counterValue).toHaveTextContent('9');
        fireEvent.click(decrementButton);
        fireEvent.click(decrementButton);
        fireEvent.click(decrementButton);
        expect(counterValue).toHaveTextContent('6');
    });
});
