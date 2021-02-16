import React, {useMemo} from "react";
import { useTheme } from "@material-ui/styles";

export default function useBreakpoints() {
  const theme = useTheme();

  const xs = theme.breakpoints.values['xs'];
  const sm = theme.breakpoints.values['sm'];
  const md = theme.breakpoints.values['md'];
  const lg = theme.breakpoints.values['lg'];

  const breakpoints = useMemo( () => ([xs, sm, md, lg]), [xs, sm, md, lg] );

  const ranges = {
    [xs]: {
      min: 0,
      max: sm - 1
    },
    [sm]: {
      min: sm,
      max: md - 1
    },
    [md]: {
      min: md,
      max: lg - 1
    },
    [lg]: {
      min: lg,
      max: lg * 100
    },
  };

  const aspects = {
    "6x4": {
      [xs]: {
        width: '100%',
        height: 'auto',
      },
      [sm]: {
        width: '600',
        height: '400',
      },
      [md]: {
        width: '960',
        height: '640',
      },
      [lg]: {
        width: '1280',
        height: '853',
      },
      ratio: 4/6,
    },
    "16x9": {
      [xs]: {
        width: '100%',
        height: 'auto',
      },
      [sm]: {
        width: '600',
        height: '338',
      },
      [md]: {
        width: '960',
        height: '540',
      },
      [lg]: {
        width: '1280',
        height: '720',
      },
      ratio: 9/16,
    },
    "16x10": {
      [xs]: {
        width: '100%',
        height: 'auto',
      },
      [sm]: {
        width: '600',
        height: '375',
      },
      [md]: {
        width: '960',
        height: '600',
      },
      [lg]: {
        width: '1280',
        height: '800',
      },
      ratio: 10/16,
    },
    "1x1": {
      [xs]: {
        width: '100%',
        height: 'auto',
      },
      [sm]: {
        width: '600',
        height: '600',
      },
      [md]: {
        width: '960',
        height: '960',
      },
      [lg]: {
        width: '1280',
        height: '1280',
      },
      ratio: 1,
    },
    "8.5x11": {
      [xs]: {
        width: '100%',
        height: 'auto',
      },
      [sm]: {
        width: '600',
        height: '774',
      },
      [md]: {
        width: '960',
        height: '1242',
      },
      [lg]: {
        width: '1280',
        height: '1656',
      },
      ratio: 11/8.5
    },
    "10x8": {
      [xs]: {
        width: '100%',
        height: 'auto',
      },
      [sm]: {
        width: '600',
        height: '480',
      },
      [md]: {
        width: '960',
        height: '768',
      },
      [lg]: {
        width: '1280',
        height: '1024',
      },
      ratio: 8/10
    },
  };

  return {
    aspects,
    ranges,
    breakpoints
  };
}