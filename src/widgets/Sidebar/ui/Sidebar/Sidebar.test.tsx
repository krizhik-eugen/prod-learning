import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('Sidebar should be visible', () => {
        componentRender(<Sidebar />);
        const sidebar = screen.getByTestId('sidebar');
        expect(sidebar).toBeInTheDocument();
    });
    test('Sidebar toggle test', () => {
        componentRender(<Sidebar />);
        const sidebar = screen.getByTestId('sidebar');
        expect(sidebar).toBeInTheDocument();
        expect(sidebar).not.toHaveClass('collapsed');
        const btn = screen.getByText('<');
        fireEvent.click(btn);
        expect(sidebar).toHaveClass('collapsed');
    });
});
