import React from 'react';
import { Link } from 'react-router-dom';

function Stats() {
    return (
        <div className='container p-3'>
            <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with confindence</h1>

                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.3+ crore customers trust FinTrade with &#x20B9;3.5+ lakh crores worth of equity investments</p>

                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like</p>

                    <h2 className='fs-4'>The FinTrade universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudges and kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>

                <div className='col-lg-6 col-md-12 col-sm-12 p-5'>
                    <img src='media/images/ecosystem.png' alt='' style={{width: "90%"}} />
                    <div className='text-center'>
                        <Link to='/' className='mx-5' style={{textDecoration: "none"}}>Explore our products <i className="fa-solid fa-arrow-right"></i> </Link>
                        <Link to='/' style={{textDecoration: "none"}}>Try Kite demo <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;