import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const Main = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            <BugButton />
            {t('Main page')}
        </div>
    );
};

export default Main;
