import React, { useRef } from 'react';
import { RiMailLine } from '@remixicon/react';
import SlideUp from '../../../utlits/animations/slideUp';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    toast.promise(
      emailjs.sendForm(
        'service_sru8bdd',
        'template_pc3267h',
        form.current,
        { publicKey: 'PRHpEpA3oOy56GdXC' }
      ),
      {
        pending: 'Sending message...',
        success: 'Message sent successfully!',
        error: 'Something went wrong.',
      }
    );


    e.target.reset();
  };

  return (
    <div className="col-lg-8">
      <SlideUp>
        <div className="contact-form contact-form-area">
          <form ref={form} onSubmit={sendEmail} className="contactForm" name="contactForm">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="form-control"
                    placeholder="Zain"
                    required
                  />
                  <span className="for-icon"><i className="far fa-user"></i></span>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="form-control"
                    placeholder="zain@websitename.com"
                    required
                  />
                  <span className="for-icon"><i className="far fa-envelope"></i></span>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Write your message"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group mb-0">
                  <button type="submit" className="theme-btn">
                    Send Me Message <i><RiMailLine size={15} /></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </SlideUp>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
};

export default ContactForm;
