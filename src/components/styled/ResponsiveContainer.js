import {styled} from '@mui/system';

const ResponsiveContainer = styled('div')(({theme}) => ({
  color: theme.palette.text.secondary,
  [theme.breakpoints.up('xs')]: {
    width: '100%'
  },
  [theme.breakpoints.up('sm')]: {
    width: '600px'
  },
  [theme.breakpoints.up('md')]: {
    width: '900px'
  },
  [theme.breakpoints.up('lg')]: {
    width: '1200px'
  },
  [theme.breakpoints.up('xl')]: {
    width: '1536px'
  },
}));

export default ResponsiveContainer;
