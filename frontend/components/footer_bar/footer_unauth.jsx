import React from 'react';
import { Link } from 'react-router-dom';

const footer_unauth = () => {
    return (
        <section className="footer">
            <section className="foot-col">
                <Link className="fake" to="#">
                    About Us
              </Link>
                <Link className="fake" to="#">
                    Fair Trade Music
              </Link>
                <Link className="fake" to="#">
                    Jobs
              </Link>
                <Link className="fake" to="#">
                    Terms of Use
              </Link>
                <Link className="fake" to="#">
                    Privacy
              </Link>
                <Link className="fake" to="#">
                    Copyright Policy
              </Link>
            </section>
            <section className="foot-col">
                <Link className="fake" to="#">
                    Gift Cards
              </Link>
                <Link className="fake" to="#">
                    TuneShack Daily
              </Link>
                <Link className="fake" to="#">
                    Facebook
              </Link>
                <Link className="fake" to="#">
                    Contact/Help
              </Link>
            </section>
            <section className="foot-col" />
            <section className="foot-col">
                {/* <h2>Created By: Chris Yip</h2>
                <i className="fas fa-igloo"></i>

                <i className="fab fa-linkedin-in" />
                <a className="contact-links" href="https://www.linkedin.com/in/cyip87/">
                    LinkedIn
              </a>

                <a className="contact-links" href="https://github.com/cyippiy">
                    GitHub
              </a> */}
            </section>
        </section>
    )
}

export default footer_unauth;