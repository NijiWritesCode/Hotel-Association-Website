import React, { useEffect, useState } from "react";
import "./Jobs.css";
import Navbar from "../Sub_Component/Navbar/Navbar.jsx";
import Footer from "../Sub_Component/Footer/Footer.jsx";
import AdOverlay from "../Sub_Component/Advert/Advert.jsx";
import { ScrollRestoration } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase_config.jsx";
import JobCard from "../HotelJobs/Components/JobCard.jsx";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "HotelJobs"));

        const jobsData = querySnapshot.docs
          .map((doc) => ({
            firestoreId: doc.id, // Firestore document ID
            ...doc.data(),
          }))
          .filter((job) => job.status === "open")
          .sort((a, b) => {
            if (!a.createdAt || !b.createdAt) return 0;
            return b.createdAt.seconds - a.createdAt.seconds;
          });

        setJobs(jobsData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to load job listings. Please try again later.");
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <div className="jobs-page">
        <Navbar />

        <section className="jobs-hero">
          <h1>Hospitality Job Opportunities</h1>
          <p>
            Verified job openings from registered member hotels of the Ado Odo
            Ota Hoteliers' Association.
          </p>
        </section>

        <section className="jobs-listings">
          {loading && <p>Loading job listings...</p>}
          {error && <p className="error">{error}</p>}
          {!loading && !error && jobs.length === 0 && (
            <p>No open job vacancies at the moment.</p>
          )}

          {!loading &&
            !error &&
            jobs.map((job) => (
              <JobCard key={job.firestoreId} job={job} />
            ))}
        </section>

        <Footer />
        <AdOverlay />
      </div>

      <ScrollRestoration />
    </>
  );
};

export default Jobs;
