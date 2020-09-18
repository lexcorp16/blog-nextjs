import React from "react";
import styles from '../styles/Bio.module.css';

const Bio = () => {
  return (
    <div className={styles.container}>
      <img src="/headshot.jpg" alt="Author Image" className={styles.image}/>
      <div>
        <div>Personal blog by Fasoro Alexander</div>
        <div>Senior Learner</div>
      </div>
    </div>
  );
};

export default Bio;
