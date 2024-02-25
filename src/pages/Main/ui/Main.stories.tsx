import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import StyleDecorator from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import Main from './Main';

const meta = {
    title: 'pages/Main',
    component: Main,
    parameters: {
        // layout: 'centered',
    },
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: [StoreDecorator({})],

};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
