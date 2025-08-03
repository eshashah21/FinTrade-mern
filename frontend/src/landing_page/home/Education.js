import React from 'react';
import { Link } from 'react-router-dom';

function Education() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <img src='media/images/education.svg' alt='' style={{width: "70%"}} />
                </div>

                <div className='col-lg-6 col-md-12 col-sm-12 mb-5'>
                    <h1 className="mb-3 fs-2 mt-5">Free and open market education</h1>
                    <p>
                        Varsity, the largest online stock market education book in the world
                        covering everything from the basics to advanced trading.
                    </p>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </Link>
                    <p className="mt-5">
                        TradingQ&A, the most active trading and investment community in
                        India for all your market related queries.
                    </p>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Education;