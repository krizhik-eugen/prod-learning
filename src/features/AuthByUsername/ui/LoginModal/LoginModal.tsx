import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
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
        <LoginForm />
    </Modal>
);
