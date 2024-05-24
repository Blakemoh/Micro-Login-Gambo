import React, {useState} from 'react'
import Questionmark from './assets/question4.png';

export const UserInput = ({ value, onChange }) => {
    const [email, setEmail] = useState({});
    return (
        <>
            <input
                type='email'
                placeholder='Email, phone, or Skype'
                autoComplete='off'
                name='email'
                className='textbox'
                required
                value={value}
                onChange={onChange}
            />
            <hr className='hr1' />
            <label className='label1' htmlFor=''>No account?</label>
            <a className='a1' href='#'>Create one!</a><br />
            <a className='a2' href='#'>Sign in with a security key</a>
            <a className='a3' href='#'><img className='img2' src={Questionmark} alt='' /></a>
        </>
    )
}

export const PassInput = ({ value, onChange }) => {
    const [password, setPassword] = useState({})
    return (
        <div>
            <div className='mb-2'>
                <input
                    type='password'
                    placeholder='Password'
                    autoComplete='off'
                    name='password'
                    className='textbox'
                    required
                    value={value}
                    onChange={onChange}
                />
                <hr className='hr1'></hr>
                <a className='a1' href='#'>Forgot password?</a><br></br>
                <a className='a2' href='#'>Other ways to sign in</a>
            </div>
        </div>
    )
}

