import type { Preview } from '@storybook/react';
import { Theme } from '../../src/app/providers/ThemeProvider';
import RouterDecorator from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import StyleDecorator from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import ThemeDecorator from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import StoreDecorator from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
    ],
};

export default preview;
