import React, { useState, useEffect } from 'react';
import './Membership.css';
import Navbar from '../Sub_Component/Navbar/Navbar.jsx';
import Footer from '../Sub_Component/Footer/Footer.jsx';
import { ScrollRestoration } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase_config.jsx';
import MemberCard from '../Sub_Component/MemberCard/MemberCard.jsx';
import AdOverlay from '../Sub_Component/Advert/Advert.jsx';

const Membership = () => {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleMembers, setVisibleMembers] = useState(10);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Members'));
        const membersData = querySnapshot.docs
          .map(doc => ({
            id: doc.id,
            ...doc.data(),
          }))
          .sort((a, b) => {
            // Sort by sn (ascending), treat missing sn as "N/A" (place last)
            const aSn = a.sn ? a.sn.toString() : 'N/A';
            const bSn = b.sn ? b.sn.toString() : 'N/A';
            return aSn.localeCompare(bSn, undefined, { numeric: true });
          });
        setMembers(membersData);
        setFilteredMembers(membersData); // Initialize filteredMembers
        setLoading(false);
      } catch (err) {
        console.error('Error fetching members:', err);
        setError('Failed to load members. Please try again later.');
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  useEffect(() => {
    // Filter members based on search query
    const filtered = members
      .filter(member =>
        ['sn', 'hotelName', 'director', 'address', 'telephone'].some(key =>
          member[key]?.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
      .sort((a, b) => {
        // Sort filtered members by sn (ascending)
        const aSn = a.sn ? a.sn.toString() : 'N/A';
        const bSn = b.sn ? b.sn.toString() : 'N/A';
        return aSn.localeCompare(bSn, undefined, { numeric: true });
      });
    setFilteredMembers(filtered);
    setVisibleMembers(10); // Reset visible members when search changes
  }, [searchQuery, members]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleShowMore = () => {
    setVisibleMembers(prev => prev + 10);
  };

  const handleShowLess = () => {
    setVisibleMembers(10);
  };

  return (
    <>
      <div className="membership">
        <div className="nav">
          <Navbar />
        </div>

        <div className="membership_info">
          <div className="desc">
            <h2>Membership</h2>
            <p>
              The Ado Odo Ota Hoteliers' Association is a collective of hotel owners, managers, and stakeholders committed to raising the standard of hospitality services in Ado Odo Ota LGA, Ogun State. Membership offers access to a supportive network, critical industry insights, collaborative advocacy, and capacity development.
            </p>
          </div>

          <div className="section_1 sec">
            <h2>Who Can Join?</h2>
            <p>Membership is open to:</p>
            <div className="card">
              <ul>
                <li>Owners of hotels, guesthouses, motels, and lodges within Ado Odo Ota LGA</li>
                <li>Registered hotel operators and managers</li>
                <li>Hospitality-related business stakeholders operating in the Ado Odo Ota region</li>
              </ul>
            </div>
          </div>

          <div className="section_2 sec">
            <h2>Benefits Of Membership</h2>
            <div className="card">
              <ul>
                <li>Owners of hotels, guesthouses, motels, and lodges within Ado Odo Ota LGA</li>
                <li>Registered hotel operators and managers</li>
                <li>Hospitality-related business stakeholders operating in the Ado Odo Ota region</li>
                <li>Representation in security and government stakeholder meetings</li>
                <li>Access to industry-specific trainings, workshops, and seminars</li>
                <li>Networking opportunities with fellow hoteliers</li>
                <li>Support with regulatory compliance and business registration</li>
                <li>Inclusion in collective promotional campaigns and awareness drives</li>
                <li>Participation in exclusive events and social gatherings</li>
                <li>Eligibility to vote and be voted for in association elections</li>
              </ul>
            </div>
          </div>

          <div className="section_3 sec">
            <h2>Join Us</h2>
            <p>
              Are you a hotel operator in Ado Odo Ota LGA? Join us to benefit from a strong network, legal backing, security partnerships, and business growth opportunities. Together, we raise the bar for hospitality in Ado Odo Ota. For information on how to become a member, call: 08029088818, 08162315016
            </p>
          </div>

          <div className="members-detail">
            <h2>Our Members</h2>
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search members by serial number, hotel, director, address, or phone..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            {loading && <p>Loading members...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && filteredMembers.length === 0 && <p>No members found.</p>}
            {!loading && !error && filteredMembers.length > 0 && (
              <>
                <div className="members-grid">
                  {filteredMembers.slice(0, visibleMembers).map((member) => (
                    <MemberCard
                      key={member.id}
                      serialNumber={member.sn || 'N/A'} // Fallback for missing sn
                      hotelName={member.hotelName}
                      director={member.director}
                      address={member.address}
                      phone={member.telephone}
                    />
                  ))}
                </div>
                <div className="button-container">
                  {visibleMembers < filteredMembers.length && (
                    <button className="show-more" onClick={handleShowMore}>
                      Show More
                    </button>
                  )}
                  {visibleMembers > 10 && (
                    <button className="show-less" onClick={handleShowLess}>
                      Show Less
                    </button>
                  )}
                </div>
              </>
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

export default Membership;