import React, { useState, useRef } from 'react';
import { RiMailLine } from '@remixicon/react';
import SlideUp from '../../../utlits/animations/slideUp';
import { Toaster, toast } from 'sonner'; // Import Sonner

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const form = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError('');
    setSuccess(false);

    const formDataObj = new FormData(event.target);
    formDataObj.append('access_key', '16e4054a-debf-4da6-89a6-5cbccc0413fe');

    const promise = fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formDataObj,
    }).then((res) => res.json());

    toast.promise(promise, {
      loading: 'Sending your message...',
      success: (data) => {
        setSuccess(true);
        setFormData({ user_name: '', user_email: '', message: '' }); // Reset form after success
        return `${data.message || 'Your message has been sent successfully!'}`;
      },
      error: (err) => {
        setError(err.message);
        return 'There was an error sending your message. Please try again.';
      },
    });

    setLoading(false);
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
                    value={formData.user_name}
                    onChange={handleInputChange}
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
                    value={formData.user_email}
                    onChange={handleInputChange}
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
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-control"
                    rows="4"
                    placeholder="Write your message"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group mb-0">
                  <button type="submit" className="theme-btn" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Me Message'} <i><RiMailLine size={15} /></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </SlideUp>

      {/* Sonner Toast */}
      <Toaster 
        position="top-center" 
        toastOptions={{
          style: {
            padding: '16px',
            borderRadius: '8px',
          },
          className: 'custom-toast',
        }}
      />
    </div>
  );
};

export default ContactForm;
