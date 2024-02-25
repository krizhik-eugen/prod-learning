import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Text title={t('Login form')} />
            {error && <Text title={error} theme={TextTheme.ERROR} />}
            <Input
                placeholder={t('Enter login')}
                type="text"
                className={styles.input}
                autofocus
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                placeholder={t('Enter password')}
                type="text"
                className={styles.input}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                disabled={isLoading}
                className={styles.loginBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
            >
                {t('Login')}
            </Button>
        </div>
    );
});
