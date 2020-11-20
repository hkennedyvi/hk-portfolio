import React from 'react';
import './contactform.scss';

function ContactForm() {
    return (
        <div>
            <div className="greeting">
                <h4>
                    don't be a stranger
                </h4>
                <h1>
                    Contact Me
                </h1>
            </div>
            <div className="contact_container">
                <div>
                    <h2>
                        let's work together
                    </h2>
                </div>
                <div className="info_container">
                    <div>
                        <span>
                            Email:<br />
                            atestemail@email.com<br />
                            <hr />
                        </span>
                    </div>
                    <div>
                        <span>
                            Phone:<br />
                            (123)456-7890<br />
                            <hr />
                        </span>
                    </div>
                    <div>
                        <span>
                            LinkedIn:<br />
                            linkedin.com/myprofile<br />
                            <hr />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;