import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import PageWrapper from '../layout/page-wrapper/page-wrapper';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t('intro.subtitle')}</title>
        <meta name="description" content={t('about.fact1')} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <PageWrapper />
    </>
  );
}

export default App;
