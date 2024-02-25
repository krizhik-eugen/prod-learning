import '../../../../app/styles/index.scss';
import { Story } from '@storybook/react';
import React from 'react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '../../../../app/providers/StoreProvider';

const StoreDecorator = (state: DeepPartial<StateSchema>) => (Story: Story) => (
    <StoreProvider initialState={state}>
        <Story />
    </StoreProvider>
);
export default StoreDecorator;
