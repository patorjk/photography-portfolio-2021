import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';

export default function useBreakpoints() {
  const theme = useTheme();

  const xs = theme.breakpoints.values['xs'];
  const sm = theme.breakpoints.values['sm'];
  const md = theme.breakpoints.values['md'];
  const lg = theme.breakpoints.values['lg'];
  const xl = theme.breakpoints.values['xl'];

  const breakpoints = useMemo(() => [xs, sm, md, lg, xl], [xs, sm, md, lg, xl]);

  const ranges = {
    [xs]: {
      min: 0,
      max: sm - 1,
    },
    [sm]: {
      min: sm,
      max: md - 1,
    },
    [md]: {
      min: md,
      max: lg - 1,
    },
    [lg]: {
      min: lg,
      max: xl - 1,
    },
    [xl]: {
      min: xl,
      max: xl * 100,
    },
  };

  const aspects = {
    '6x4': {
      [xs]: {
        width: '100%',
        height: 'auto',
      },
      [sm]: {
        width: '600',
        height: '400',
      },
      [md]: {
        width: '900',
        height: '600',
      },
      [lg]: {
        width: '1200',
        height: '800',
      },
      [xl]: {
        width: '1536',
        height: '1025',
      },
      ratio: 4 / 6,
    },
    '16x9': {
      [xs]: {
        width: '100%',
        height: 'auto',
      },
      [sm]: {
        width: '600',
        height: '338',
      },
      [md]: {
        width: '900',
        height: '506',
      },
      [lg]: {
        width: '1200',
        height: '675',
      },
      [xl]: {
        width: '1536',
        height: '864',
      },
      ratio: 9 / 16,
    },
    '16x10': {
      [xs]: {
        width: '100%',
        height: 'auto',
      },
      [sm]: {
        width: '600',
        height: '375',
      },
      [md]: {
        width: '900',
        height: '563',
      },
      [lg]: {
        width: '1200',
        height: '750',
      },
      [xl]: {
        width: '1536',
        height: '960',
      },
      ratio: 10 / 16,
    },
    '1x1': {
      [xs]: {
        width: '100%',
        height: 'auto',
      },
      [sm]: {
        width: '600',
        height: '600',
      },
      [md]: {
        width: '900',
        height: '900',
      },
      [lg]: {
        width: '1200',
        height: '1200',
      },
      [xl]: {
        width: '1536',
        height: '1536',
      },
      ratio: 1,
    },
    '8.5x11': {
      [xs]: {
        width: '100%',
        height: 'auto',
      },
      [sm]: {
        width: '600',
        height: '774',
      },
      [md]: {
        width: '900',
        height: '1165',
      },
      [lg]: {
        width: '1200',
        height: '1553',
      },
      [xl]: {
        width: '1536',
        height: '1988',
      },
      ratio: 11 / 8.5,
    },
    '10x8': {
      [xs]: {
        width: '100%',
        height: 'auto',
      },
      [sm]: {
        width: '600',
        height: '480',
      },
      [md]: {
        width: '900',
        height: '720',
      },
      [lg]: {
        width: '1200',
        height: '960',
      },
      [xl]: {
        width: '1536',
        height: '1229',
      },
      ratio: 8 / 10,
    },
    '8x10': {
      [xs]: {
        width: '100%',
        height: 'auto',
      },
      [sm]: {
        width: '600',
        height: '750',
      },
      [md]: {
        width: '900',
        height: '1125',
      },
      [lg]: {
        width: '1200',
        height: '1500',
      },
      [xl]: {
        width: '1536',
        height: '1920',
      },
      ratio: 10 / 8,
    },
  };

  return {
    aspects,
    ranges,
    breakpoints,
  };
}
