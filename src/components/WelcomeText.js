import React from 'react';
import PropTypes from 'prop-types';
import mainLogo from "../static/Logo.png"

const WelcomeText = ({ description }) => (
  <div className="welcome-text">
    <img src={mainLogo} alt="N2N Logo" className="hidden-xs"/>
    <p>Welcome to<br/>N2N Recruitment Portal</p>
    {description}
  </div>
);

WelcomeText.propTypes = { description: PropTypes.string };
WelcomeText.defaultProps = { description: '' };

export default WelcomeText;
