import axios from "axios"
import { useEffect, useState } from "react"

import '../Counter/counter.css'
import './users.css'

const API_URL = 'http://localhost:3001/users'

export default function User () {

    const [users, setUsers ] = useState([])
    const [newUser, setNewUser] = useState({
        name: '',
        lastname: ''
    })

    const getUsers = async () => {
        const response = await axios.get(API_URL);
        setUsers(response.data)
    }
    
    useEffect(() => {
        getUsers()
    }, [])

    const addUser = async (event) => {
        event.preventDefault()
        try {
            await axios.post(API_URL, newUser)
            setUsers([...users, newUser])
            setNewUser({
                name: '',
                lastname: ''
            }) 

        } catch (error) {
            console.error('Error adding a user', error)
        }
    }


    const deleteUser = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`)
            setUsers(users.filter(user => user.id !== id))
        } catch (error) {
            console.error('Error deleting a user', error)
        }
    }
    
    console.log('Users JSON -->', users)

    return (
        <div className="userPage">

            <div className="createUser">
                <form onSubmit={addUser}>
                    <input className='input' placeholder='John' type="text" value={newUser.name} onChange={(e) => {setNewUser({...newUser, name: e.target.value})}}/>
                    <input className='input' placeholder='Doe' type="text" value={newUser.lastname} onChange={(e) => {setNewUser({...newUser, lastname: e.target.value})}}/>
                    <button className='btn' type='submit'>Create new User</button>
                </form>
            </div>
            
            <button className='btn' onClick={getUsers}>Get Users</button>
            
            {users.map((user) => (
            <div key={user.id} className="users">

                <h3>{user.name}</h3>
                <p>{user.lastname}</p>
                <button className="btnDelete" onClick={() => {deleteUser(user.id)}}>Delete User</button>
            </div>
            ))} 

      </div>
    )
}