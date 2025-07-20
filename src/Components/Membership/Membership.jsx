import React from 'react'
import './Membership.css'
import Navbar from '../Sub_Component/Navbar/Navbar.jsx'
import Footer from '../Sub_Component/Footer/Footer.jsx'
import { ScrollRestoration } from 'react-router-dom'

const Membership = () => {
  return (

    <>
    <div className="membership">

      <div className="nav">
        <Navbar />
      </div>

      <div className="membership_info">

        <div className="desc">

          <h2>
            Membership
          </h2>

          <p>
            The Ado Odo Ota Hoteliers' Association is a collective of hotel owners, managers, and stakeholders committed to raising the standard of hospitality services in Ado Odo Ota LGA, Ogun State. Membership offers access to a supportive network, critical industry insights, collaborative advocacy, and capacity development.
          </p>

        </div>

        <div className="section_1 sec">

          <h2>
            Who Can Join?
          </h2>

          <p>
            Membership is open to:
          </p>

          <div className="card">
            <ul>
              <li>Owners of hotels, guesthouses, motels, and lodges within Ado Odo Ota LGA</li>
              <li>Registered hotel operators and managers</li>
              <li>Hospitality-related business stakeholders operating in the Ado Odo Ota region</li>
            </ul>
          </div>

        </div>

        <div className="setion_2 sec">

          <h2>
            Benefits Of Membership
          </h2>

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

          <h2>
            Join Us
          </h2>

          <p>
            Are you a hotel operator in Ado Odo Ota LGA? Join us to benefit from a strong network, legal backing, security partnerships, and business growth opportunities. Together, we raise the bar for hospitality in Ado Odo Ota. For information on how to become a member, call: 08029088818, 08162315016
          </p>

        </div>


      </div>
        <div className="foot">
          <Footer />
        </div>
    </div>

    <ScrollRestoration />
    </>

  )
}

export default Membership