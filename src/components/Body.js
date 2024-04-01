import styles from './Body.module.css';
import main from '../images/main1.jpeg';
import Carousel from './Carousel';
import { useState } from 'react';
import {reports} from '../utils/reports.js';
import {services} from '../utils/services.js';
import { Link } from 'react-router-dom';
export default function Body() {
    const [cards,setCards]=useState(false);
    return (
        <>
        <div className={styles.container}></div>
        <div className={styles.body}>
            <img src={main} alt='main' className={styles.main}/>
            <div className={styles.text_container}>
            <h1>Acharya Mridul Mishra</h1>
            <h3>Recommended by many users</h3>
        </div>
        <div>
        <Link to="/testimonials"><button className={styles.testimonials}>Our Testimonials</button></Link>
        </div>
        </div>
       
        <div className={styles.container}></div>
        <div className={styles.services}>
            <h2>Our Services include Consultaion regarding the following:</h2>
            <Carousel cards={cards} type={services}/>
        </div>

        <div className={styles.reports}>
        <h2>We also provide reports for the following:</h2>
        <button onClick={()=>setCards(!cards)}>{!cards ? 'View':'Hide'}</button>
        {cards && <Carousel cards={cards} type={reports}/>}
        </div>
        </>
    )
}