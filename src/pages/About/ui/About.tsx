import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const About = memo(() => {
    const { t } = useTranslation('about');
    return (
        <div>
            {t('About')}
        </div>
    );
});

export default About;
