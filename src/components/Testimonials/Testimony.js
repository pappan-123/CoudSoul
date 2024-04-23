import React, { Component } from 'react';

class Testimony extends Component {
  render() {
    const { img, comment, name, occupation } = this.props;

    return (
      <div className="testimony">
        <div className="testimony__avatar">
          <img src={img} alt="Avatar" />
        </div>
        <div className="testimony__comment">
          <p className="text">{comment}</p>
          <p className="text">
            <strong style={{ color: "black" }}>{name} / </strong>
            <strong style={{ color: "black" }}>{occupation}</strong>
          </p>
        </div>
      </div>
    );
  }
}

export default Testimony;
