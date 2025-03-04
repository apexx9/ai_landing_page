import React from 'react';
import Image from 'next/image';
import dashboardImage from "../../public/Dashboard.png";
import styles from "../styles/layout/_dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={styles["dashboard"]}>
        <Image 
        alt='dashboard Image'
        width={1520}
        height={1084}
        src={dashboardImage}
        />
    </div>
  )
}

export default Dashboard;