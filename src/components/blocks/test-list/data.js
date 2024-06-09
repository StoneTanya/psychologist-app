import i18n from '../../../i18n';

const testList = () => {
  const titles = i18n.t('tests.links', { returnObjects: true });

  return [
    {
      title: titles[0],
      link: 'https://psytests.org/depr/bai.html',
    },
    {
      title: titles[1],
      link: 'https://psytests.org/diag/tas26.html',
    },
    {
      title: titles[2],
      link: 'https://psytests.org/kumar/vsp.html',
    },
    {
      title: titles[3],
      link: 'https://psytests.org/family/bsas.html',
    },
  ];
};

export default testList;
