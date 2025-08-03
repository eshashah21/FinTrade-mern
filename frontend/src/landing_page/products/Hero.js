import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className='container border-bottom'>
            <div className='row text-center mt-5 mb-5'>
                <h1>Technology</h1>
                <h3 className="text-muted mt-3 fs-4">
                    Sleek, modern and intuitive trading platforms
                </h3>
                <p>
                    Check out our{" "}
                    <Link to="" style={{ textDecoration: "none" }}>
                        investment offerings{" "}
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Hero;