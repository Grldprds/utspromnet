import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="SocialMedia">
        <a href="https://www.instagram.com/geralpradesa/">
          <InstagramIcon className="icon"/>
        </a>
        <a href="https://wa.me/081387925734">
          <WhatsAppIcon className="icon"/>
        </a>
        <a href="https://www.linkedin.com/in/geral-pradesa-22418a264/">
          <LinkedInIcon className="icon"/>
        </a>
      </div>
      <p>&copy; 2023 Universitas Pendidikan Indonesia</p>
    </div>
  );
}

export default Footer;
