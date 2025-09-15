import React, { useState, useEffect } from 'react'
import './Leadership.css'
import Navbar from '../Sub_Component/Navbar/Navbar.jsx'
import LiComponent from '../Sub_Component/LiComponent/LiComponent.jsx'
import LeadershipCard from '../Sub_Component/LeaderCard/LeaderCard.jsx'
import Footer from '../Sub_Component/Footer/Footer.jsx'
import { ScrollRestoration } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase_config.jsx'
import AdOverlay from '../Sub_Component/Advert/Advert.jsx'


const Leadership = () => {

  const [executives, setExecutives] = useState([]);
  const [loadingExecutives, setLoadingExecutives] = useState(true);
  const [errorExecutives, setErrorExecutives] = useState(null);

  const fetchExecutives = async () => {
    try {
      const collectionRef = collection(db, 'Executives');
      const querySnapshot = await getDocs(collectionRef);
      const executiveList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setExecutives(executiveList);
      setLoadingExecutives(false);
    } catch (error) {
      setErrorExecutives('Failed to fetch executives. Please try again later.');
      setLoadingExecutives(false);
    }
  };

  useEffect(() => {
    fetchExecutives();
  }, []);

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
          The leadership of the Ado Odo Ota Hoteliers' Association is structured into two main arms: the Elders Forum and the Executive Committee. Together, they work in collaboration to guide, manage, and implement the mission and vision of the association. Through a collaborative relationship, the Elders Forum and the Executive Committee provide a strong, accountable, and transparent leadership structure for the Ado Odo Ota Hoteliers' Association, positioning it for growth and influence in the hospitality sector.
        </p>

        <div className="temp_h">

          <div className="temp">

          <h2>
            Elders Forum
          </h2>

          <p>
            The Elders Forum serves as the highest advisory and oversight body within the association. They ensure continuity, provide strategic guidance, and offer checks and balances to the decisions made by the executive body. The Elders Forum is also instrumental in resolving disputes and ensuring the association adheres to legal and ethical standards.
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
            <LiComponent topic={'Advisory Role'} subtopic={'The Elders Forum provides expert advice to the executive committee and the general membership, helping to guide the strategic direction of the association.'}/>
            <LiComponent topic={'Policy Oversight'} subtopic={'The Elders Forum is responsible for reviewing and approving policies and decisions made by the executive committee to ensure they align with the overall mission of the association.'}/>
            <LiComponent topic={'Fund raising and Financial Support'} subtopic={'The Elders Forum plays a key role in securing funding and resources for the association’s activities, projects, and initiatives.'}/>
            <LiComponent topic={'Conflict Resolution'} subtopic={'When conflicts or disputes arise within the association, the Elders Forum acts as an impartial body to mediate and resolve issues in a fair and constructive manner.'}/>
            <LiComponent topic={'Leadership and Administration'} subtopic={'The Executives are responsible for the day-to-day running of the association, ensuring all activities align with its goals and policies.'}/>
            <LiComponent topic={'Meeting Coordination'} subtopic={'They organize and preside over general meetings, executive meetings, and other official gatherings of the association.'}/>
            <LiComponent topic={'Implementation Of Decision'} subtopic={'The Executives execute the resolutions passed by members and endorsed by the Elders Forum.'}/>
            <LiComponent topic={'Membership Engagement'} subtopic={'They facilitate communication with members, ensuring active participation and addressing concerns raised by hotel operators.'}/>
          </div>

          <div className="card">
            <LiComponent topic={'Legal and Ethic Oversight'} subtopic={'The Elders Forum ensures that the association operates within the confines of the law and adheres to high ethical standards in all of its activities.'} />
            <LiComponent topic={'Long-term Planning'} subtopic={'The Elders Forum helps with the long-term planning and sustainability of the association, ensuring its growth and impact in the future.'}/>
            <LiComponent topic={'Representation'} subtopic={'Elders Forum members represent the interests of hotel owners and operators in Ado Odo Ota, advocating on their behalf with local government and other stakeholders.'}/>
            <LiComponent topic={'Membership Development'} subtopic={'The Elders Forum supports initiatives aimed at increasing membership and strengthening the association’s influence in the industry.'}/>
            <LiComponent topic={'Project Execution'} subtopic={'The Executives oversee community outreach programs, training initiatives, safety collaborations, and industry partnerships.'}/>
            <LiComponent topic={'Finicial Management'} subtopic={'They manage the financial affairs of the association, including budget planning, fundraising, and expenditure control, subject to oversight from the Elders Forum.'}/>
            <LiComponent topic={'Compliance And Discipline'} subtopic={'They ensure that members comply with association rules and handle disciplinary actions in line with the constitution and in consultation with the Elders Forum.'}/>
            <LiComponent topic={'Representation'} subtopic={'The Executives represent the association at external functions, liaising with government agencies, law enforcement, and tourism bodies on behalf of members.'}/>
          </div>

          </div>

        </div>

        <h2>
          Executives
        </h2>
        
        <div className="executives">
          {loadingExecutives ? (
                        <div className="loading">Loading executives...</div>
                      ) : errorExecutives ? (
                        <div className="error">{errorExecutives}</div>
                      ) : executives.length === 0 ? (
                        <p>No executives found.</p>
                      ) : (
                        <div className="l_info">
                          {executives
                            .filter((executive) => executive.createdAt) // Only keep docs with createdAt
                            .sort((a, b) => {
                              const dateA = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(0);
                              const dateB = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(0);
                              return dateA - dateB; // Ascending order
                            })
                            .map((executive) => (
                              <LeadershipCard
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

      <div className="end">
          <Footer />
      </div>

      <AdOverlay />

    </div>
    <ScrollRestoration />
    </>
  )
}

export default Leadership