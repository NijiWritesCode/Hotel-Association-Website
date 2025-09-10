import React from 'react';
import './Events.css';
import Navbar from '../Sub_Component/Navbar/Navbar.jsx';
import LiComponent from '../Sub_Component/LiComponent/LiComponent.jsx';
import Others from '../Sub_Component/Others/Others.jsx';
import Footer from '../Sub_Component/Footer/Footer.jsx';
import { ScrollRestoration } from 'react-router-dom';
import AdOverlay from '../Sub_Component/Advert/Advert.jsx';

const Events = () => {
  return (
    <>
      <div className="event_page">
        <div className="nav">
          <Navbar />
        </div>

        <div className="event_body">
          <h2>Events And Activities</h2>
          <p>
            The Ado Odo Ota Hoteliers' Association is actively involved in organizing and participating in events that promote the growth, safety, and professionalism of the hospitality industry in Ado Odo Ota LGA. These events provide valuable opportunities for networking, education, advocacy, and community engagement.
          </p>

          <div className="regular">
            <h2>Regular Events And Key Activities</h2>
            <div className="cards">
              <div className="card">
                <LiComponent topic={'Monthly General Meetings'} subtopic={'Held to discuss current issues affecting members, share updates from the leadership, and strengthen unity among hoteliers.'} />
                <LiComponent topic={'Security & Stakeholder Briefings'} subtopic={'Regular meetings with security agencies, local authorities, and community leaders to address security challenges and improve guest safety.'} />
                <LiComponent topic={'Workshops And Trainings'} subtopic={'Capacity-building programs on hospitality standards, customer service, digital marketing, and regulatory compliance.'} />
                <LiComponent topic={'Annual General Meeting (AGM)'} subtopic={'A major gathering where key reports are presented, elections may be held, and long-term plans are discussed.'} />
              </div>

              <div className="card">
                <LiComponent topic={'Hospitality Awareness Campaigns'} subtopic={'Outreach events to promote responsible hospitality practices, hygiene, and guest welfare within the community.'} />
                <LiComponent topic={'Social & Networking Events'} subtopic={'End-of-year parties, recognition awards, and other bonding activities to celebrate achievements and foster camaraderie among members.'} />
                <LiComponent topic={'Community Engagement'} subtopic={'Charitable contributions, local clean-up drives, and partnerships with community groups to give back and build goodwill.'} />
                <LiComponent topic={'Compliance Drives'} subtopic={'Initiatives to ensure members adhere to government policies, safety regulations, and licensing requirements.'} />
              </div>
            </div>
          </div>

          <div className="others">
            <Others title={'Upcoming Events'} detail={'Details of upcoming events will be communicated to all members through official channels. Members are encouraged to stay active and participate fully in all scheduled programs.'} />
            <Others title={'Get Involved'} detail={"If you're a member or interested in joining our association, participating in our events is a great way to connect with peers, stay informed, and contribute to the advancement of the hospitality sector in Ado Odo Ota."} />
            <Others title={'Join Us'} detail={"Are you a hotel operator in Ado Odo Ota LGA? Join us to benefit from a strong network, legal backing, security partnerships, and business growth opportunities. Together, we raise the bar for hospitality in Ado Odo Ota. For information on how to become a member, call: +2348037279143"} />
          </div>
        </div>

        <div className="foot">
          <Footer />
        </div>

        <AdOverlay />
      </div>

      <ScrollRestoration />
    </>
  );
};

export default Events;