import React from 'react';
import { Link } from 'react-router-dom';

function Pricing() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-4 col-md-12 col-sm-12'>
                    <h1 className='mb-3 fs-2'>Unbeatble Pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        See Pricing
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </Link>
                </div>
                <div className='col-2'></div>
                <div className='col-lg-6 col-md-12 col-sm-12 mb-5'>
                    <div className='row text-center mt-3'>
                        <div className='col p-2 border'>
                            <h1 className='mb-3'>&#x20B9;0</h1>
                            <p>
                                Free equity delivery and
                                <br />
                                direct mutual funds
                            </p>
                        </div>
                        <div className='col p-2 border'>
                            <h1 className="mb-3">&#x20B9;20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;