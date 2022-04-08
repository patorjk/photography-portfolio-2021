import { styled } from '@mui/system';

export default styled('div')(({ spacing = 0, theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(spacing),
}));
