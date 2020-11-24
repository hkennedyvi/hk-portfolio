import React from 'react';
import './contactform.scss';

function ContactForm() {
    return (
        <div>
            <div className="greeting">
                <h4>
                    don't be a stranger
                </h4>
                <h1 className="greeting_header">
                    Contact Me
                </h1>
            </div>
            <div className="contact_container">
                <div>
                    <h2 className="contact_header">
                        let's work together
                    </h2>
                </div>
                <div className="info_container">
                    <div>
                        <span>
                            Email:<br />
                            hkennedyvi@gmail.com<br />
                            <hr />
                        </span>
                    </div>
                    <div>
                        <span>
                            Phone:<br />
                            (503) 754-3532<br />
                            <hr />
                        </span>
                    </div>
                    <div>
                        <span>
                            LinkedIn:<br />
                            linkedin.com/in/howard-kennedy<br />
                            <hr />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;