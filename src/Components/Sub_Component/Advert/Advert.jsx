import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase_config';
import { collection, getDocs } from 'firebase/firestore';
import './Advert.css';

const AdOverlay = () => {
  const [showAdOverlay, setShowAdOverlay] = useState(true);
  const [adData, setAdData] = useState(null);

  const fetchAd = async () => {
    try {
      const collectionRef = collection(db, 'Advertisements');
      const querySnapshot = await getDocs(collectionRef);
      const adList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      if (adList.length > 0) {
        setAdData(adList[0]); // Only take the first ad
      } else {
        setAdData(null); // No ads
      }
    } catch (error) {
      console.error('AdOverlay: Error fetching ad:', error);
      setAdData(null);
    }
  };

  useEffect(() => {
    fetchAd();
  }, []);

  const handleCloseAd = () => {
    setShowAdOverlay(false);
  };

  // ✅ Don’t render at all if no ad or closed
  if (!showAdOverlay || !adData) return null;

  return (
    <div className="ad-overlay">
      <div
        className="ad-content"
        style={{
          backgroundImage: adData.imageUrl ? `url(${adData.imageUrl})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <button className="close-button" onClick={handleCloseAd}>×</button>
        <div className="ad-text-container">
          <h2>{adData.title}</h2>
          <p>{adData.description}</p>
          {adData.eventDate && (
            <p className="event-date">
              <strong>Event Date:</strong> {new Date(adData.eventDate).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdOverlay;