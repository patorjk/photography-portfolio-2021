import {Link} from '@mui/material';
import React from 'react';
import ResponsiveContainer from './styled/ResponsiveContainer';

function ClosingMessage() {
  return (
    <ResponsiveContainer sx={{textAlign:'left'}}>
      <h3 style={{textAlign:'center',letterSpacing:'4px'}}>***</h3>
      <p style={{padding: '0 12px'}}>
        {`If you're interested in more of my work you can checkout
        my social media links up at the top. I also have a `}
        <Link href='https://www.youtube.com/user/patorjk/'>YouTube</Link>
        {` channel, and at some point I may try and do a video on this site.
        Though then again I might not, so if you sub you might be subbing to a channel that will be dormant for a 
        long time, and then when I finally do upload you'll be all confused about why you're subbed to the channel... 
        so yeah, your decision :P.`}
      </p>
    </ResponsiveContainer>
  );
}

export default ClosingMessage;
