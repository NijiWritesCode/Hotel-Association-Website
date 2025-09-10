import './Home.css';
import { ScrollRestoration } from "react-router-dom";
import { useState, useEffect } from 'react';
import Navbar from '../Sub_Component/Navbar/Navbar';
import EvCard from '../Sub_Component/EvCard/EvCard';
import Footer from '../Sub_Component/Footer/Footer';
import Leadership from '../Sub_Component/LeaderCard/LeaderCard.jsx';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase_config.jsx';
import AdOverlay from '../Sub_Component/Advert/Advert.jsx';

const Home = () => {
  const [executives, setExecutives] = useState([]);
  const [events, setEvents] = useState([]);
  const [loadingExecutives, setLoadingExecutives] = useState(true);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [errorExecutives, setErrorExecutives] = useState(null);
  const [errorEvents, setErrorEvents] = useState(null);

  const fetchExecutives = async () => {
    try {
      const collectionRef = collection(db, 'Executives');
      const querySnapshot = await getDocs(collectionRef);
      const executiveList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log('Fetched executives:', executiveList);
      setExecutives(executiveList);
      setLoadingExecutives(false);
    } catch (error) {
      console.error('Error fetching executives:', error);
      setErrorExecutives('Failed to fetch executives. Please try again later.');
      setLoadingExecutives(false);
    }
  };

  const fetchEvents = async () => {
    try {
      const collectionRef = collection(db, 'Events');
      const querySnapshot = await getDocs(collectionRef);
      const eventList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log('Fetched events:', eventList);
      setEvents(eventList);
      setLoadingEvents(false);
    } catch (error) {
      console.error('Error fetching events:', error);
      setErrorEvents('Failed to fetch events. Please try again later.');
      setLoadingEvents(false);
    }
  };

  useEffect(() => {
    fetchExecutives();
    fetchEvents();
  }, []);

  return (
    <>
      <div className="home">
        <div className="header">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="header-text">
            <h1>Welcome To</h1>
            <h4>Ado-Odo-Ota Hotelier Association's <br/> Official Website.</h4>
          </div>
        </div>

        <div className="body">
          <div className="description">
            <h2>Your trusted network of hospitality Ota, Ogun.</h2>
            <p>
              The Ado-Odo-Ota Hotelier Association is a unified body of guest houses, and hotel owners
              committed to promoting excellence, collaboration, and sustainable growth in the hospitality
              industry within Ota Community. Whether you are a guest house owner, a hotel owner, or hospitality
              enthusiast, the Ado-Odo-Ota Hoteliers Association provides the resources, advocacy and support needed
              to thrive in an ever-evolving industry. Together, we elevate hospitality standards in Ota.
            </p>
          </div>

          <div className="events">
            <h2>Events And Activities</h2>
            <div className="event">
              {loadingEvents ? (
                <div className="loading">Loading events...</div>
              ) : errorEvents ? (
                <div className="error">{errorEvents}</div>
              ) : events.length === 0 ? (
                <p>No events found.</p>
              ) : (
                events
                  .filter((event) => event.createdAt)
                  .sort((a, b) => {
                    const dateA = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(0);
                    const dateB = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(0);
                    return dateB - dateA;
                  })
                  .slice(0, 4)
                  .map((event) => (
                    <EvCard
                      key={event.id}
                      image={event.imageUrl || '/default-event-image.jpg'}
                      event_name={event.title || 'Untitled Event'}
                    />
                  ))
              )}
            </div>
          </div>

          <div className="benefit">
            <h2>Key Benefits Of The Association</h2>
            <div className="benefits">
              <div className="b_card">
                <ul>
                  <li>Potential cost savings (e.g., group deals, discounts on services)</li>
                  <li>Enhanced credibility and visibility for members</li>
                  <li>Access to exclusive events and conferences</li>
                  <li>Advocacy and representation in industry matters</li>
                  <li>Access to industry research, reports, and best practices</li>
                  <li>Opportunities for collaboration and partnerships</li>
                  <li>Networking opportunities with industry peers</li>
                  <li>Access to training and professional development</li>
                  <li>Improved security through shared intelligence and partnerships with law enforcement</li>
                </ul>
              </div>
              <div className="b_card">
                <ul>
                  <li>Crisis support and emergency response coordination</li>
                  <li>Collective bargaining power for utilities, supplies, and services</li>
                  <li>Updates on changing hospitality trends, laws, and tourism policies</li>
                  <li>Marketing and promotion support via association platforms or events</li>
                  <li>Dispute resolution support and mediation between members or customers</li>
                  <li>Opportunities to influence government policy and sector reforms</li>
                  <li>Access to a trusted vendor network and referrals</li>
                  <li>Community impact programs and CSR collaborations</li>
                  <li>Standardization of operations and service delivery within the industry</li>
                  <li>Access to legal and financial advisory services</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="leadership_team">
            <h2>Ado-Odo-Ota Executives</h2>
            {loadingExecutives ? (
              <div className="loading">Loading executives...</div>
            ) : errorExecutives ? (
              <div className="error">{errorExecutives}</div>
            ) : executives.length === 0 ? (
              <p>No executives found.</p>
            ) : (
              <div className="l_info">
                {executives
                  .filter((executive) => executive.createdAt)
                  .sort((a, b) => {
                    const dateA = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(0);
                    const dateB = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(0);
                    return dateA - dateB;
                  })
                  .slice(0, 4)
                  .map((executive) => (
                    <Leadership
                      key={executive.id}
                      image={executive.profileImage || '/default-avatar.jpg'}
                      position={executive.role || 'Executive'}
                      name={executive.director || 'Unknown'}
                    />
                  ))}
              </div>
            )}
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

export default Home;