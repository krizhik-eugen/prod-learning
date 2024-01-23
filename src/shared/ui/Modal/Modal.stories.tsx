import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from 'shared/ui/Modal/Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad consectetur deserunt dolor doloribus ea fugit ipsum iste laborum mollitia, obcaecati odit ratione veniam voluptate? Dicta ipsam minus obcaecati!',
    },

};

export const PrimaryDark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad consectetur deserunt dolor doloribus ea fugit ipsum iste laborum mollitia, obcaecati odit ratione veniam voluptate? Dicta ipsam minus obcaecati!',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
