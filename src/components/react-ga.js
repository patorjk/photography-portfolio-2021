import React from 'react';

const ReactGA = {};

ReactGA.initialize = () => {};
ReactGA.pageview = () => {};
ReactGA.set = () => {};
ReactGA.event = () => {};

ReactGA.OutboundLink = ({ to, target, eventLabel, style, children }) => {
  <a href={to} target={target} style={style}>
    {children}
  </a>;
};

export default ReactGA;
