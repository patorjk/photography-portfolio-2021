import { Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { MagicalText } from 'react-halloween';
import { useTranslation } from 'react-i18next';

export default function MainEnding() {
  const { t } = useTranslation();
  return (
    <Box>
      <h3>
        <MagicalText
          animationTime={10}
          showAdornments={false}
          text={'Thank you for stopping by!'}
        />
      </h3>
      <p>
        If you have a sec, check out the galleries below.{' '}
        <Link href={'/gallery/mccloud-at-night/'}>
          {t('toolbar.galleryMcCloudAtNight')}
        </Link>{' '}
        is a set of images I took while exploring the small town of McCloud,
        California. The images have a "liminal space" type feel to them, and are
        a bit darker than the images in the main gallery.
      </p>
    </Box>
  );
}
