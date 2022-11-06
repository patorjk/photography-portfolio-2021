import {Link} from '@mui/material';
import React from 'react';
import {useTranslation} from 'react-i18next';

export default function MainEnding() {
  const {t} = useTranslation();
  return (
    <>
      <h3>Thank you for stopping by!</h3>
      <p>
        If you have a sec, check out the new gallery I put up called
        {' '}
        <Link
          href={'/gallery/mccloud-at-night/'}
        >{t('toolbar.galleryMcCloudAtNight')}</Link>
        {'. '}
        It's a set of images I took while exploring the small town of McCloud, California.
        The images have a "liminal space" type feel to them, and are a bit darker than the images
        in the main gallery.
      </p>
    </>
  );
}