import '../Counter/counter.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Jokes() {

    const [jokes, setJokes] = useState("")

    const getJokes = async () => {
        const response = await axios.get("https://api.chucknorris.io/jokes/random")
        setJokes(response.data.value)
    }

    useEffect(() => {
        getJokes()
    }
    , []) 

    return (
        <div className='counter'>

            <p>{jokes}</p>
            <button onClick={getJokes} className="btn">Get Jokes</button>

        </div>
    )
}