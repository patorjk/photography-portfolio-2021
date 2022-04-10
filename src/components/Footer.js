import React from 'react';

const topDiv = {
  flexShrink: 0,
};

const innerStyle = {
  margin: '10px 20px',
  fontSize: '0.8em',
  textAlign:'center',
};

function getRandomFooterMessage() {
  var msgs = [];
  msgs.push('I feel like this footer needs some text, do people read webpage footers?');
  msgs.push('Great wisdom can be found in the small print of webpage footers.');
  // eslint-disable-next-line max-len
  msgs.push('Back in 2011, MC Hammer launched a search engine called "WireDoo". That has nothing to do with this page, I just wanted to share.');
  // eslint-disable-next-line max-len
  msgs.push('Coca-Cola was originally sweetened with wine. Before the wine was switched out for sugar, it was known as "Pemberton\'s French Wine Coca". It was a 1886 prohibition law enacted in Atlanta that caused its inventor, Dr. John S. Pemberton, to rewrite the formula. And that my friends, is the story of Coca-Cola.');
  // eslint-disable-next-line max-len
  msgs.push('Random fact #42: Kodak invented the first digital camera back in 1975, but held back on the concept because it didn\'t want to hurt it\'s film business.');
  msgs.push('Random fact #53: The human eye can distinguish around 10 million different colors.');

  var rand = Math.floor(Math.random() * msgs.length);

  return msgs[rand];
}

function Footer() {
  return (
    <div style={ topDiv }>
      <div style={ innerStyle }>
        { getRandomFooterMessage() }
      </div>
    </div>
  );
}

export default Footer;
