import { Box } from '@mui/system';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function MainIntro() {
  const { t } = useTranslation();
  return (
    <Box>
      <h3>{t('blurb.introHeader')}</h3>
      <p>{t('blurb.introText')}</p>
    </Box>
  );
}
