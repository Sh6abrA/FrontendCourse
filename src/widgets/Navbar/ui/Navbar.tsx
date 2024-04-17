/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';




export const Navbar = () => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])
    return (
        <div className={classNames(classes.Navbar)}>
            <Button
                onClick={onToggleModal}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={classes.links}
            >
                {t("Войти")}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia aliquam dolorum a esse! Alias adipisci modi ullam explicabo deserunt culpa numquam iste, illo corrupti provident, eaque voluptatem voluptatibus fuga tempore.
            </Modal>
        </div>
    );
}

