import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/NotFound.module.css';
import notFoundImage from '../../assets/notFound.jpg'; 

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.fullscreenContainer}>
      <img src={notFoundImage} alt="Not Found" className={styles.fullscreenImage} />
      <button className={styles.goHomeButton} onClick={() => navigate('/')}>
      ⬅ Back to Home
      </button>
    </div>
  );
};

export default NotFound;