import React from 'react';
import { useTranslation } from 'react-i18next';

export default function MainImageToggles() {
  const { t } = useTranslation();
  return (
    <>
      <h3>{t('blurb.imageTogglesHeader')}</h3>
      <p>{t('blurb.imageTogglesText')}</p>
    </>
  );
}
