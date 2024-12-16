import axios from "axios"
import { useEffect, useState } from "react"

import '../Counter/counter.css'
import './users.css'

const dbUsers = '../../db/users.json'

export default function User () {

    const [users, setUsers ] = useState([])

    const getUsers = async () => {
        const response = await axios.get("http://localhost:3001/users");
        setUsers(response.data)

        
    }
    
    useEffect(() => {
        getUsers()
    }, [])
    
    console.log('Users JSON -->', users)

    return (
        <div>
        <button className='btn' onClick={getUsers}>Get Users</button>
        
        {users.map((user) => (
          <div key={user.id} className="users">
            <h3>{user.name}</h3>
            <p>{user.lastname}</p>
          </div>
        ))} 

      </div>
    )
}