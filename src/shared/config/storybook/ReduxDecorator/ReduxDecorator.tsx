import '../../../../app/styles/index.scss';
import { Story } from '@storybook/react';
import { StoreProvider } from '../../../../app/providers/StoreProvider';

const ReduxDecorator = (Story: Story) => <StoreProvider><Story /></StoreProvider>;

export default ReduxDecorator;
