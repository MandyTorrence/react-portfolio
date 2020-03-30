import React from 'react';

const Contact = () => {
    return (
        <section>
            <h1>
                Contact Me
            </h1>
            <div className="divider-line">
            </div>
            <div className="section-content">
                <form>
                    <div>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="user_name" />
                    </div>
                    <div>
                        <label for="mail">E-mail:</label>
                        <input type="email" id="mail" name="user_mail" />
                    </div>
                    <div>
                        <label for="message">Message:</label>
                        <textarea id="message" rows="8" name="user_message"></textarea>
                    </div>
                    <div className="button">
                        <button type="submit">Send It</button>
                    </div>
                </form>
            </div>
        </section >
    );
}

export default Contact;