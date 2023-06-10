import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navigation />
      <div className="flex-grow">{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
