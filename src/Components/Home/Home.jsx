import './Home.css'
import { ScrollRestoration } from "react-router-dom";
import Navbar from '../Sub_Component/Navbar/Navbar'
import EvCard from '../Sub_Component/EvCard/EvCard'
import img from '../../assets/backGround.jpg'
import Footer from '../Sub_Component/Footer/Footer'
import Leadership from '../Sub_Component/LeaderCard/LeaderCard.jsx'
import vc_1_Image from '../../assets/1st_Vice_Chairman.jpeg'
import charirman from '../../assets/Chairman_1.jpeg'
import vc_2_Image from '../../assets/2nd_Vice_Chairman.jpeg'
import secetary from '../../assets/Secetary.jpeg'
import ev_image1 from '../../assets/Hoteliers association biannual conference in ile ife (ojaja resort).jpeg'
import ev_image2 from '../../assets/World Tourism day 2024.jpeg'
import ev_image3 from '../../assets/Inauguration of Alh Olajide Sodunke from Ota zone.jpeg'
import ev_image4 from '../../assets/Cross section of conference participants at ife.jpeg'
const Home = () => {
  return (

    <>
    <div className="home">

      <div className="header">
        <div className="navbar">
          <Navbar />
        </div>
      <div className="header-text">
        <h1>
          Welcome To
        </h1>
        <h4>
          Ado-Odo-Ota Hotelier Association's <br/> Official Website.
        </h4>
      </div>
      </div>

      <div className="body">

        <div className="description">

          <h2>
            Your trusted network of hospitality Ota, Ogun.
          </h2>

          <p>
            The Ado-Odo-Ota Hotelier Association is a unified body of guest houses, and hotel owners
            commited to promoting excellence, collaboration, and sustainable growth in the hospitality
            industry with Ota Community. Whether you are a guest house owner, a hotel owner, or hospitality
            enthusiast, the Ado-Odo-Ota Hoteliers Association provides the resources, advocacy and support needed
            to thrive in an ever-evolving industry. Together, we elevate hospitality standards in Ota.
          </p>
        </div>

        <div className="events">
          <h2>
            Events And Activities
          </h2>
          <div className="event">
            <EvCard image={ev_image1} event_name={"Hoteliers association biannual conference in ile ife"}/>
            <EvCard image={ev_image2} event_name={"World Tourism day 2024"}/>
            <EvCard image={ev_image3} event_name={"Inauguration of Alh Olajide Sodunke from Ota zone"}/>
            <EvCard image={ev_image4} event_name={"Cross section of conference participants at ife"}/>
          </div>
        </div>

        <div className="benefit">

          <h2>Key Benefits</h2>

          <div className="benefits">

            <div className="b_card">
            <ul>
              <li>Support in navigating regulatory issues</li>
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

            <h2>
              Ado-Odo-Ota Leadership Team
            </h2>

            <div className="l_info">
          <Leadership image={charirman} position={'Zonal Chairman'} name={'Adesina A Raphael'}/>
          <Leadership image={vc_1_Image} position={'1st Vice Chairman'} name={'SAMSON AGBOLADE ADESAKIN '}/>
          <Leadership image={vc_2_Image} position={'2nd vice Chairman'} name={'Olamiosegbe Olufemi'}/>
          <Leadership image={secetary} position={'General Secretary'} name={'Prince Olaloko Adeniran'}/>
            </div>
          </div>
          
          </div>
        </div>

          <div className="foot">
            <Footer />
          </div>

    <ScrollRestoration />
    </>
  )
}

export default Home