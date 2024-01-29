import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from 'entities/Counter/model/slice/counterSlice';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="counter-value">
                {t('value')}
                {' '}
                =
                {' '}
                {counterValue}
            </h1>
            <Button onClick={decrement}>
                {t('decrement')}
            </Button>
            <Button onClick={increment}>
                {t('increment')}
            </Button>
        </div>
    );
};
