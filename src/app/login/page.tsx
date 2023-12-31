"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";


export default function LoginPage() {

    const [user, setUser] = React.useState({
        email: "",
        password: "",
        
    })
    const onLogin = async () => {

    }

    return (

        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-2xl">Login</h1>
            <hr />

            <input
                className="p-3 border border-pink-500 rounded-lg mb-4 focus:outline-none focus:border-pink-500"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email"
            />
    
            <label htmlFor="username">password</label>
            <input
                className="p-3 border border-pink-500 rounded-lg mb-4 focus:outline-none focus:border-pink-500"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password"
            />

            <label htmlFor="email">email</label>
           
            
            <button onClick={onLogin} className="p-3 border border-pink-500 rounded-lg mb-4 focus:outline-none focus:border-pink-500">Login here</button>
            <Link href="/signup">Visit Signup page</Link>

        </div>
    )
}