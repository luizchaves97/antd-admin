import React from 'react';
import PropTypes from 'prop-types';

function AuthLayout({ children }) {
  return <div>{children}</div>;
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthLayout;
