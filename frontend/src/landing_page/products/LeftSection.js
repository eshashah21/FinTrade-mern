import React from 'react';
import { Link } from 'react-router-dom';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <img src={imageURL} alt="description" />
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 p-5 my-auto'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <Link to={tryDemo}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </Link>
                        <Link to={learnMore} style={{ marginLeft: "100px" }}>
                            Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </Link>
                    </div>
                    <div className="mt-3">
                        <Link to={googlePlay}>
                            <img src="media/images/googlePlayBadge.svg" alt="google play badge" />
                        </Link>
                        <Link to={appStore}>
                            <img
                                src="media/images/appstoreBadge.svg"
                                alt="app store badge"
                                style={{ marginLeft: "50px" }}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;