import React from 'react';
import { Box } from '@mui/system';
import { useContentSize } from '../hooks/useContentSize';

const ContentFlowGrid = ({ children }) => {
  const contentSize = useContentSize();
  return (
    <Box
      sx={{
        display: 'grid',
        gap: '50px',
        gridTemplateColumns: contentSize,
        justifyContent: 'center',
        color: (theme) => theme.palette.text.secondary,
      }}
    >
      {children}
    </Box>
  );
};

export { ContentFlowGrid };
