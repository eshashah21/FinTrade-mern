import React from 'react';
import { Link } from 'react-router-dom';

function RightSection({ imageURL, productName, productDescription, learnMore }) {
    return (
        <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 p-5 my-auto">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <Link to={learnMore}>Learn More</Link>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <img src={imageURL} alt="description" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;