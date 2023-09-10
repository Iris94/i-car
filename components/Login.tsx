'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login({ switchToRegister }: any) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPwd, setLoginPwd] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [username, setUsername] = useState('')
  const router = useRouter()

  const handleSwitch = () => {
    switchToRegister();
  }

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: loginEmail, password: loginPwd, username }),
      });

      if (response.ok) {
        setSuccess('Login successful!');
        setLoginEmail('');
        setLoginPwd('');
        setError('');
        setUsername(username)

        console.log(username)
        
        setTimeout(() => {
          setSuccess('');
          router.push('/dashboard')
        }, 1500);

      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (err) {
      setError("An error occurred during login.");
    }
  }

  return (
    <>
      <div className="w-2/3 h-3/5">
        <form
          onSubmit={handleLogin} 
          className="flex flex-col gap-2 w-full h-full justify-center items-center"
        >
          <input
            onChange={(e) => setLoginEmail(e.target.value)}
            value={loginEmail}
            type="text"
            placeholder="Email"
            className="w-full h-full text-center shadow-sm shadow-beigeColor"
          />
          <input
            onChange={(e) => setLoginPwd(e.target.value)}
            value={loginPwd}
            type="password"
            placeholder="Password"
            className="w-full h-full text-center shadow-sm shadow-beigeColor"
          />
          <button className="w-full h-full bg-lightColor text-white hover:bg-darkColor">Log In</button>
        </form>
      </div>
      <div className="w-2/3 h-2/5 flex justify-center items-center gap-2">
        <div>Don&apos;t have an account?</div>
        <button
          className="w-fit h-fit rounded-sm bg-lightColor text-white p-2 hover:bg-darkColor"
          onClick={handleSwitch}
        >
          Register
        </button>
      </div>
      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-500">{success}</div>}
    </>
  );
}
