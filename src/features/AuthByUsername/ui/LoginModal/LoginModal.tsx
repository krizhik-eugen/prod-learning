import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { LazyLoginForm as LoginForm } from '../LoginForm/LazyLoginForm';
import styles from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    onClose: () => void;
    isOpen: boolean
}

export const LoginModal = ({ className, onClose, isOpen }: LoginModalProps) => (
    <Modal
        lazy
        onClose={onClose}
        isOpen={isOpen}
        className={classNames(styles.LoginModal, {}, [className])}
    >
        <Suspense fallback={<Loader />}>
            <LoginForm />
        </Suspense>
    </Modal>
);
