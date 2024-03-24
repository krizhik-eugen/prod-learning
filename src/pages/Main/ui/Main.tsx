import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { memo } from 'react';

const Main = memo(() => {
    const { t } = useTranslation('main');

    return (
        <div>
            <BugButton />
            {t('Main page')}

            <Counter />

        </div>
    );
});

export default Main;
