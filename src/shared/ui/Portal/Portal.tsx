import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    element?: HTMLBRElement
}

export const Portal = (props: PropsWithChildren<PortalProps>) => {
    const {
        children,
        element = document.body,
    } = props;

    return createPortal(children, element);
};
