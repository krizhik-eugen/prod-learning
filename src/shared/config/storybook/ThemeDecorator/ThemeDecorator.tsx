import React from 'react';
import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from '../../../../app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: Story) => (
    <ThemeProvider>
        <div className={`App ${theme}`}>
            <Story />
        </div>
    </ThemeProvider>
);

export default ThemeDecorator;
