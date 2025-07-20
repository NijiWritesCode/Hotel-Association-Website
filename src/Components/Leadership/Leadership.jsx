import React from 'react'
import './Leadership.css'
import Navbar from '../Sub_Component/Navbar/Navbar.jsx'
import LiComponent from '../Sub_Component/LiComponent/LiComponent.jsx'
import LeadershipCard from '../Sub_Component/LeaderCard/LeaderCard.jsx'
import vc_1_Image from '../../assets/1st_Vice_Chairman.jpeg'
import charirman from '../../assets/Chairman_1.jpeg'
import vc_2_Image from '../../assets/2nd_Vice_Chairman.jpeg'
import secetary from '../../assets/Secetary.jpeg'
import pro from '../../assets/P_R_O.jpeg'
import ex_Officio from '../../assets/Ex_Officio.jpeg'
import Asst_financial from '../../assets/Asst_Financial.jpeg'
import Asst_Gen_Secetary from '../../assets/Asst Gen Secretary.jpeg'
import auditorGeneral from '../../assets/Auditor General.jpeg'
import ChairmanTacticalcommittee from '../../assets/Chairman Tactical committee.jpeg'
import ex_Officio2 from '../../assets/Ex officio 2.jpeg'
import socialSecretary_1 from '../../assets/social secretary_1.jpeg'
import Footer from '../Sub_Component/Footer/Footer.jsx'
import { ScrollRestoration } from 'react-router-dom'

const Leadership = () => {
  return (

    <>
    <div className="leader">

      <div className="nav">
        <Navbar />
      </div>

      <div className="leader_body">

        <h2>
          Leadership
        </h2>

        <p>
          The leadership of the Ado Odo Ota Hoteliers' Association is structured into two main arms: the Board of Trustees (BOT) and the Executive Committee. Together, they work in collaboration to guide, manage, and implement the mission and vision of the association. Through a collaborative relationship, the BOT and the Executive Committee provide a strong, accountable, and transparent leadership structure for the Ado Odo Ota Hoteliers' Association, positioning it for growth and influence in the hospitality sector.
        </p>

        <div className="temp_h">

          <div className="temp">

          <h2>
            Board of Trustees (BOT)
          </h2>

          <p>
            The BOT serves as the highest advisory and oversight body within the association. They ensure continuity, provide strategic guidance, and offer checks and balances to the decisions made by the executive body. The BOT is also instrumental in resolving disputes and ensuring the association adheres to legal and ethical standards.
          </p>

          </div>

          <div className="temp">

            <h2>
              The Executive
            </h2>

            <p>
              The Executive Committee is responsible for the day-to-day management and operational execution of the association’s activities. They are elected by members and hold various leadership positions within the association.
            </p>

          </div>

        </div>

        <div className="function">

          <h2>
            Key Function
          </h2>

          <div className="cards">

          <div className="card">
            <LiComponent topic={'Advisory Role'} subtopic={'The BOT provides expert advice to the executive committee and the general membership, helping to guide the strategic direction of the association.'}/>
            <LiComponent topic={'Policy Oversight'} subtopic={'The BOT is responsible for reviewing and approving policies and decisions made by the executive committee to ensure they align with the overall mission of the association.'}/>
            <LiComponent topic={'Fund raising and Financial Support'} subtopic={'The BOT plays a key role in securing funding and resources for the association’s activities, projects, and initiatives.'}/>
            <LiComponent topic={'Conflict Resolution'} subtopic={'When conflicts or disputes arise within the association, the BOT acts as an impartial body to mediate and resolve issues in a fair and constructive manner.'}/>
            <LiComponent topic={'Leadership and Administration'} subtopic={'The Executives are responsible for the day-to-day running of the association, ensuring all activities align with its goals and policies.'}/>
            <LiComponent topic={'Meeting Coordination'} subtopic={'They organize and preside over general meetings, executive meetings, and other official gatherings of the association.'}/>
            <LiComponent topic={'Implementation Of Decision'} subtopic={'The Executives execute the resolutions passed by members and endorsed by the BOT.'}/>
            <LiComponent topic={'Membership Engagement'} subtopic={'They facilitate communication with members, ensuring active participation and addressing concerns raised by hotel operators.'}/>
          </div>

          <div className="card">
            <LiComponent topic={'Legal and Ethic Oversight'} subtopic={'The BOT ensures that the association operates within the confines of the law and adheres to high ethical standards in all of its activities.'} />
            <LiComponent topic={'Long-term Planning'} subtopic={'The BOT helps with the long-term planning and sustainability of the association, ensuring its growth and impact in the future.'}/>
            <LiComponent topic={'Representation'} subtopic={'Board members represent the interests of hotel owners and operators in Ado Odo Ota, advocating on their behalf with local government and other stakeholders.'}/>
            <LiComponent topic={'Membership Development'} subtopic={'The BOT supports initiatives aimed at increasing membership and strengthening the association’s influence in the industry.'}/>
            <LiComponent topic={'Project Execution'} subtopic={'The Executives oversee community outreach programs, training initiatives, safety collaborations, and industry partnerships.'}/>
            <LiComponent topic={'Finicial Management'} subtopic={'They manage the financial affairs of the association, including budget planning, fundraising, and expenditure control, subject to oversight from the BOT.'}/>
            <LiComponent topic={'Compliance And Discipline'} subtopic={'They ensure that members comply with association rules and handle disciplinary actions in line with the constitution and in consultation with the BOT.'}/>
            <LiComponent topic={'Representation'} subtopic={'The Executives represent the association at external functions, liaising with government agencies, law enforcement, and tourism bodies on behalf of members.'}/>
          </div>

          </div>

        </div>

        <h2>
          Executives
        </h2>
        <div className="executives">
          <LeadershipCard image={charirman} position={'Zonal Chairman'} name={'Adesina A Raphael'}/>
          <LeadershipCard image={vc_1_Image} position={'1st Vice Chairman'} name={'SAMSON AGBOLADE ADESAKIN '}/>
          <LeadershipCard image={vc_2_Image} position={'2nd vice Chairman'} name={'Olamiosegbe Olufemi'}/>
          <LeadershipCard image={secetary} position={'General Secretary'} name={'Prince Olaloko Adeniran'}/>
          <LeadershipCard image={pro} position={'P.R.O'} name={'Ajumobi B Samuel'}/>
          <LeadershipCard image={Asst_financial} position={'Asst. Financial Secretary'} name={'Quadri Balogun'} />
          <LeadershipCard image={ex_Officio} position={'Ex Officio'} name={'Odeyemi Mopelola Catherine'}/>
          <LeadershipCard image={ex_Officio2} position={'Ex Officio 2'} name={'Chief Samuel Ajayi'}/>
          <LeadershipCard image={Asst_Gen_Secetary} position={'Ass. General Secretary'} name={'Adeniji Abraham'}/>
          <LeadershipCard image={auditorGeneral} position={'Auditor General'} name={'Adetonwa Abiodun Olusanya'}/>
          <LeadershipCard image={socialSecretary_1} position={'Social Secretary'} name={'Akinyemi olanrewaju'}/>
          <LeadershipCard image={ChairmanTacticalcommittee} position={'Chairman Tactical Committee'} name={'Alh Y Shitabey'}/>
        </div>
        
      </div>

      <div className="end">
          <Footer />
      </div>

    </div>
    <ScrollRestoration />
    </>
  )
}

export default Leadership