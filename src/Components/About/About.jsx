import React from 'react';
import './About.css';
import Navbar from '../Sub_Component/Navbar/Navbar.jsx';
import AboutCard from '../Sub_Component/AboutCard/AboutCard.jsx';
import Footer from '../Sub_Component/Footer/Footer.jsx';
import { ScrollRestoration } from 'react-router-dom';
import AdOverlay from '../Sub_Component/Advert/Advert.jsx';

const About = () => {
  return (
    <>
      <div className="about">
        <div className="nav">
          <Navbar />
        </div>

        <div className="about_page">
          <div className="intro">
            <h2>About</h2>
            <p>
              The Ado Odo Ota Hoteliers' Association is a unified body of hospitality business owners and hotel operators within the Ado Odo Ota Local Government Area of Lagos State, Nigeria. Established to promote collaboration, uphold industry standards, and protect the collective interests of hoteliers in the region, the association plays a vital role in the growth and stability of the local hospitality sector.
            </p>
          </div>

          <div className="card-section">
            <AboutCard topic={'Our Mission'} desc={'To unite and empower hoteliers by fostering collaboration, promoting excellence in hospitality, and driving sustainable growth through innovation, capacity building, and advocacy for industry standards that enhance guest experiences and economic development.'}/>
            <AboutCard topic={'Our Vision'} desc={'To be the leading voice and catalyst for a thriving, world-class hospitality industry that celebrates diversity, delivers exceptional guest experiences, and contributes significantly to the nation socio-economic progress.'}/>
            <AboutCard topic={'What We Do'} desc={"Ado Odo Ota Hoteliers' Association serves as a bridge between hotel operators and relevant authorities, law enforcement agencies, tourism boards, and the public. We organize training, workshops, and community safety initiatives to keep our members informed and protected. The association also provides a platform for resolving issues, sharing best practices, and supporting members in regulatory and operational challenges."}/>
            <AboutCard topic={'Our Leadership'} desc={"The association is governed by an Elders Forum and an elected Executive Committee. The Elders Forum offers strategic oversight and continuity, while the Executives handle day-to-day affairs and drive key initiatives. Together, they ensure transparent, accountable, and impactful leadership."}/>
            <AboutCard topic={'Our Membership'} desc={"Our members include licensed hotels, guest houses, motels, and lodges operating within Ado Odo Ota and its environs. We welcome all hospitality establishments that seek to align with industry standards and contribute to a safer and more professional hospitality environment."}/>
            <AboutCard topic={'Join Us'} desc={"Are you a hotel operator in Ado Odo Ota LGA? Join us to benefit from a strong network, legal backing, security partnerships, and business growth opportunities. Together, we raise the bar for hospitality in Ado Odo Ota. For information on how to become a member, call: +2348037279143"}/>
          </div>
        </div>

        <div className="end">
          <Footer />
        </div>

        <AdOverlay />
      </div>

      <ScrollRestoration />
    </>
  );
};

export default About;