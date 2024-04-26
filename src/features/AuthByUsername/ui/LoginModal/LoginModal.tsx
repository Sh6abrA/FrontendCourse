import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import {LoginFormAsync as LoginForm} from '../LoginForm/LoginForm.async';
import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    return (
        <Modal
            className={classNames(cls.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader/>}>
                <LoginForm onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
}

