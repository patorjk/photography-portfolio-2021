import React from 'react';
import {useTranslation} from 'react-i18next';

export default function MainIntro() {
  const {t} = useTranslation();
  return (
    <>
      <h3>{t('blurb.introHeader')}</h3>
      <p>
        {t('blurb.introText')}
      </p>
    </>
  );
}
