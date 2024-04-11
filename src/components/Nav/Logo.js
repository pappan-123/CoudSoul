import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3>TEK CLOUDSOUL PVT.LTD</h3>
        </Link>
      </div>
    );
  }
}

export default Logo;
