import logo from '../images/logo.jpg';
import logoText2 from '../images/logoText2.png';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useState } from 'react';


export default function Header() {
    const [isOpenForSignUp,setIsOpenForSignUp]=useState(false);
    const [isOpenForUserLogin,setIsOPenForUserLogin]=useState(false);
    const [registerData,setRegisterData]=useState({
        email:'',
        password:'',
        number:''
    })
    const [loginData,setLoginData]=useState({
        email:'',
        password:''
    })

   

    function getEmail(e) {
        setRegisterData(
            {...registerData,
                [e.target.name]:e.target.value
            }
        )
        setLoginData(
            {
                ...loginData,
                [e.target.name]:e.target.value
            }
        )
    }
    function getPassword(e) {
        setRegisterData(
            {...registerData,
                [e.target.name]:e.target.value
            }
        )
        setLoginData(
            {
                ...loginData,
                [e.target.name]:e.target.value
            }
        )
    }
    function getNumber(e) {
        setRegisterData(
            {...registerData,
                [e.target.name]:e.target.value
            }
        )
    }

    function handleRegister(e) {
        e.preventDefault();
        console.log(registerData)
    
      
    }
    function handleLogin(e) {
        e.preventDefault();
        console.log(loginData)
    }
    return (
        <div className={styles.container}>
            <div className={styles.image_container}>
            <Link to="/">
                <img src={logo} width={80} height={90} alt='logo' className={styles.logo}/>
                <img src={logoText2} width={400} height={70} alt='logo' className={styles.logoText}/>
            </Link>
            </div>
            <div className={styles.btn_container}>
                <button className={styles.signUp} onClick={()=>setIsOpenForSignUp(true)}>Sign Up</button>
                <button className={styles.login} onClick={()=>setIsOPenForUserLogin(true)}>User login</button>
                <Link to="/astrologer/register"><button className={styles.joinAsAstrologer}>Join as astrologer?</button></Link>
            </div>
            <div>
            <Modal open={isOpenForSignUp} onClose={()=>setIsOpenForSignUp(false)}  
                classNames={{
                overlay: 'customOverlay',
                modal: 'customModal',
                }}
                center
            >
                <form className={styles.signUpModal}>
                    <input type='email' placeholder='Enter your Email' required name='email' onChange={(e)=>getEmail(e)}/>
                    <input type='password' placeholder='Enter your password' required name='password' onChange={(e)=>getPassword(e)}/>
                    <input type='number' placeholder='Enter your mobile number' required name='number' onChange={(e)=>getNumber(e)}/>
                    <button onClick={(e)=>handleRegister(e)}>Register</button>
                </form>
            </Modal>
            </div>
            <div>
                <Modal open={isOpenForUserLogin} onClose={()=>setIsOPenForUserLogin(false)}
                       classNames={{
                        overlay: 'customOverlay',
                        modal: 'customModal',
                        }}
                        center
                >
                    <form className={styles.userLoginModal}>
                        <input type='email' placeholder='Enter your Email' required name='email' value={loginData.email} onChange={(e)=>getEmail(e)} />
                        <input type='password' placeholder='Enter your password' required name='password' value={loginData.password} onChange={(e)=>getPassword(e)}/>
                        <button onClick={(e)=>handleLogin(e)}>Login</button>
                    </form>
                </Modal>
            </div>
        </div>
    )
}



// type of astrologer
// name 
// already platform where or fresh

// free kundli