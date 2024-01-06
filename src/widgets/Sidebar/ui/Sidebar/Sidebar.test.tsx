import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import {
    renderWithTranslation,
} from '../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
    test('Sidebar should be visible', () => {
        renderWithTranslation(<Sidebar />);
        const sidebar = screen.getByTestId('sidebar');
        expect(sidebar).toBeInTheDocument();
    });
    test('Sidebar toggle test', () => {
        renderWithTranslation(<Sidebar />);
        const sidebar = screen.getByTestId('sidebar');
        expect(sidebar).toBeInTheDocument();
        expect(sidebar).not.toHaveClass('collapsed');
        const btn = screen.getByText('toggle');
        fireEvent.click(btn);
        expect(sidebar).toHaveClass('collapsed');
    });
});
