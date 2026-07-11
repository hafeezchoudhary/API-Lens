import React from 'react'
import { getBackendStatus } from '../services/api'
import { useState } from 'react'

export default function Home() {
        const [backendMessage, setBackendMessage] = useState("");
    const handleCheckBackend = async () => {
        const result = await getBackendStatus();
        setBackendMessage(result.message);
    }
    return (
        <div>
            <h1>API-Lens</h1>
            <button onClick={handleCheckBackend}>check backend</button>
            <div>{backendMessage}</div> 

    </div>
  )
}
