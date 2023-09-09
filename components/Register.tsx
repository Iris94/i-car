'use client'

import { useState } from "react"

export default function Register ( {switchToLogin}: any ) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSwitch = () => {
        switchToLogin()
    }

    const handleSubmit = async (e : any) => {
        e.preventDefault()

        if (!username || !email || !password) {
            setError("Please fill in all fields.");
            return;
          }

        try {
            const response = await fetch ('api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, email, password})
            })

            if (response.ok) {
                setSuccess('Registration successful! You can now log in.')
                setUsername('')
                setPassword('')
                setEmail('')
                setError('')
                console.log('Response is ok')
            } else {
                const data = await response.json();
                setError(data.message);
              }
        } catch (error) {
                setError("An error occurred during registration.");
        }
    }

    return (
        <>
        <div className="w-2/3 h-3/5">
            <form 
            className="flex flex-col gap-2 w-full h-full justify-center items-center"
            onSubmit={handleSubmit}>
                <input
                onChange={(e) => setUsername(e.target.value)}
                value={username} 
                type="text" 
                placeholder="Username"
                className="w-full h-full text-center shadow-sm shadow-beigeColor" />
                <input
                onChange={(e) => setEmail(e.target.value)}
                value={email} 
                type="text" 
                placeholder="Email"
                className="w-full h-full text-center shadow-sm shadow-beigeColor" />
                <input
                onChange={(e) => setPassword(e.target.value)}
                value={password} 
                type="password"
                placeholder="Password"
                className="w-full h-full text-center shadow-sm shadow-beigeColor" />
                <button 
                className="w-full h-full bg-lightColor text-white hover:bg-darkColor">Register</button>
            </form>
        </div>
        <div className="w-2/3 h-2/5 flex justify-center items-center gap-2">
            <div>Have an account?</div>
            <button 
            className='w-fit h-fit rounded-sm bg-lightColor text-white p-2 hover:bg-darkColor'
            onClick={handleSwitch}
            >Login</button>
        </div>
        </>
    )
}