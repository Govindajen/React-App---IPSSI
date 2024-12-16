import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './login.css'

export default function Login () {
    const Navigate = useNavigate()

    const [email, setEmail] = useState("example@gmail.com")
    const [password, setPassword] = useState("password")

    const handleSubmit = (e) => {
        if (email === "example@gmail.com" && password === "password") {
            Navigate("/jokes")
        } else {
            alert("Invalid email or password")
        }
    }

    return (
        <div className="loginContainer">
            <input className="inputLogin" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="inputLogin" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button className="btn" onClick={handleSubmit}>Login</button>
        </div>
    )
}