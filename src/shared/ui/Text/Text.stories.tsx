import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Test title',
        text: 'Test text',
    },
};

export const Error: Story = {
    args: {
        title: 'Test title',
        text: 'Test text',
        theme: TextTheme.ERROR,
    },
};

export const WithTitleOnly: Story = {
    args: {
        title: 'Test title',
    },
};

export const WithTextOnly: Story = {
    args: {
        text: 'Test title',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Test title',
        text: 'Test text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const WithTitleOnlyDark: Story = {
    args: {
        title: 'Test title',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const WithTextOnlyDark: Story = {
    args: {
        text: 'Test title',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
