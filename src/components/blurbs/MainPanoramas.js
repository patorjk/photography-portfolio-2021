import React from 'react';
import {useTranslation} from 'react-i18next';

export default function MainPanoramas() {
  const {t} = useTranslation();
  return (
    <>
      <h3>{t('blurb.panoramasHeader')}</h3>
      <p>
        {t('blurb.panoramasText')}
      </p>
    </>
  );
}
