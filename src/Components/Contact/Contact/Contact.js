import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_pmoek7c', 'template_tin7b2m', e.target, 'user_lRu5T2oKaKqLudpmyBELO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }
    return (
        <div className="contact-container">
            <div className="container mt-5 mb-5">
                <form onSubmit={sendEmail}>
                    <h3>Send Me Email</h3>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" required placeholder="name" name="name" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" required placeholder="email address" name="email" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" required placeholder="subject" name="subject" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" required rows="8" placeholder="your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;