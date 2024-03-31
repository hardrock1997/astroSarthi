import styles from  '../components/Card.module.css';
export default function Card({serviceName,logoImage,description}) {
    return (
        <div className={styles.container}>
            <img src={logoImage} alt="service" width={100} height={180}/>
            <div className={styles.text_container}>
                <h4>{serviceName}</h4>
                <h3>{description}</h3>
            </div>

        </div>
    )
}