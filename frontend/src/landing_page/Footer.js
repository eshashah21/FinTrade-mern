import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
            <div className="container border-top mt-5">
                <div className="row mt-5">
                    <div className="col">
                        <img src="media/images/FinTradeLogo.png" alt='' style={{ width: "50%" }} />
                        <p>
                            &copy; 2010 - 2024, Not FinTrade Broking Ltd. All rights reserved.
                        </p>
                    </div>
                    <div className="col">
                        <p>Company</p>
                        <Link to="/">About</Link>
                        <br />
                        <Link to="/">Products</Link>
                        <br />
                        <Link to="/">Pricing</Link>
                        <br />
                        <Link to="/">Referral programme</Link>
                        <br />
                        <Link to="/">Careers</Link>
                        <br />
                        <Link to="/">FinTrade.tech</Link>
                        <br />
                        <Link to="/">Press & media</Link>
                        <br />
                        <Link to="/">FinTrade cares (CSR)</Link>
                        <br />
                    </div>
                    <div className="col">
                        <p>Support</p>
                        <Link to="/">Contact</Link>
                        <br />
                        <Link to="/">Support portal</Link>
                        <br />
                        <Link to="/">Z-Connect blog</Link>
                        <br />
                        <Link to="/">List of charges</Link>
                        <br />
                        <Link to="/">Downloads & resources</Link>
                        <br />
                    </div>
                    <div className="col">
                        <p>Account</p>
                        <Link to="/">Open an account</Link>
                        <br />
                        <Link to="/">Fund transfer</Link>
                        <br />
                        <Link to="/">60 day challenge</Link>
                        <br />
                    </div>
                </div>
                <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
                    <p>
                        FinTrade Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
                        INZ000031633 CDSL: Depository services through FinTrade Securities
                        Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
                        through FinTrade Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
                        no.: INZ000038238 Registered Address: FinTrade Broking Ltd.,
                        #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
                        J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
                        complaints pertaining to securities broking please write to
                        complaints@FinTrade.com, for DP related to dp@FinTrade.com. Please
                        ensure you carefully read the Risk Disclosure Document as prescribed
                        by SEBI | ICF
                    </p>

                    <p>
                        Procedure to file a complaint on SEBI SCORES: Register on SCORES
                        portal. Mandatory details for filing complaints on SCORES: Name,
                        PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
                        Communication, Speedy redressal of the grievances
                    </p>

                    <p>
                        Investments in securities market are subject to market risks; read
                        all the related documents carefully before investing.
                    </p>

                    <p>
                        "Prevent unauthorised transactions in your account. Update your
                        mobile numbers/email IDs with your stock brokers. Receive
                        information of your transactions directly from Exchange on your
                        mobile/email at the end of the day. Issued in the interest of
                        investors. KYC is one time exercise while dealing in securities
                        markets - once KYC is done through a SEBI registered intermediary
                        (broker, DP, Mutual Fund etc.), you need not undergo the same
                        process again when you approach another intermediary." Dear
                        Investor, if you are subscribing to an IPO, there is no need to
                        issue a cheque. Please write the Bank account number and sign the
                        IPO application form to authorize your bank to make payment in case
                        of allotment. In case of non allotment the funds will remain in your
                        bank account. As a business we don't give stock tips, and have not
                        authorized anyone to trade on behalf of others. If you find anyone
                        claiming to be part of FinTrade and offering such services, please
                        create a ticket here.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;