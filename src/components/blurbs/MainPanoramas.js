import { Box } from '@mui/system';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function MainPanoramas() {
  const { t } = useTranslation();
  return (
    <Box>
      <h3>{t('blurb.panoramasHeader')}</h3>
      <p>{t('blurb.panoramasText')}</p>
    </Box>
  );
}
