import React from 'react';
import ResponsiveContainer from './styled/ResponsiveContainer';

function ClosingMessage() {
  return (
    <ResponsiveContainer sx={{ textAlign:'left' }}>
      <p>
        Hello, and thank you for visiting. If you're interested in more of my work you can checkout
        { /* eslint-disable-next-line max-len */ }
        my social media links up at the top. I also have a <a href='https://www.youtube.com/user/patorjk/'>YouTube</a> channel, 
        and at some point I may try and do a video on this site.
        { /* eslint-disable-next-line max-len */ }
        Though then again I might not, so if you sub you might be subbing to a channel that will be dormant for a while, and then when I finally do upload you'll be all confused about why you're subbed to the channel... so yeah, your decision :P.
      </p>
      <p>
        { /* eslint-disable-next-line max-len */ }
        Still reading, eh? Just to explain the footer below this, I put random text there to see if anyone would read it. Mostly just stuff that makes me laugh, or on rare occasion something mildly informative.
      </p>
    </ResponsiveContainer>
  );
}

export default ClosingMessage;
