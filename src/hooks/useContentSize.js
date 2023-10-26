import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const useContentSize = () => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.up('xs'));
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const lg = useMediaQuery(theme.breakpoints.up('lg'));
  const xl = useMediaQuery(theme.breakpoints.up('xl'));

  if (xl) return '1536px';
  if (lg) return '1200px';
  if (md) return '900px';
  if (sm) return '600px';
  if (xs) return '100%';
};
