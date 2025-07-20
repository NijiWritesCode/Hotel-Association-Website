import React, { useState } from 'react';
import './Footer.css';
import { Facebook, MailIcon, PhoneCallIcon } from 'lucide-react';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <footer className="footer">
      <div className="footer__branding">
        <h2>ADO ODO OTA HOTELIERS ASSOCIATION</h2>
        <p className="footer__motto">Motto: UNITY AND PROGRESS</p>
      </div>

      <div className="footer__content">
        <div className="footer__contact">
          <div className="contact__item">
            <PhoneCallIcon className="icon" />
            <a href="tel:+2348037279143">+2348037279143</a>
          </div>

          <div className="contact__item">
            <Facebook className="icon" />
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              Ado Odo Ota Facebook Link
            </a>
          </div>

          <div className="contact__item">
            <MailIcon className="icon" />
            <a href="mailto:adoodootahoteliersassociation@gmail.com" target="_blank" rel="noopener noreferrer">
              adoodootahoteliersassociation@gmail.com
            </a>
          </div>
        </div>

        <div className="footer__address">
          <h3>We're located at:</h3>
          <address>
            6/8 Ibrahim Talabi Street, by Alasia Bus Stop,<br />
            Along Ilogbo Road, Ota, Ogun State, Nigeria.
          </address>
        </div>
      </div>

      <div className="footer__copyright">
        <p>&copy; {year} Ado Odo Ota Hoteliers Association. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;