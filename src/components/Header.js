import logo from '../images/logo.jpg';
import logoText2 from '../images/logoText2.png';
import styles from './Header.module.css';
export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.image_container}>
            <img src={logo} width={80} height={90} alt='logo' className={styles.logo}/>
            <img src={logoText2} width={400} height={70} alt='logo' className={styles.logoText}/>
            </div>
            <div className={styles.btn_container}>
                <button className={styles.signUp}>Sign Up</button>
                <button className={styles.login}>User login</button>
            </div>
        </div>
    )
}