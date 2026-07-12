import React from 'react'
import { getBackendStatus } from '../services/api'
import { useState } from 'react'

export default function Home() {
    const [backendMessage, setBackendMessage] = useState("")
    const [selectedFile, setSelectedFile] = useState("")
    const [selectedFilesStatus, setSelectedFileStatus] = useState("")
    const[Error, setError] = useState("") 
    const handleCheckBackend = async () => {
    const result = await getBackendStatus()
        setBackendMessage(result.message)
    }

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0])
    } 

    const handleUpload = async (e) => {
        e.preventDefault()

        if (!selectedFile) {
            setSelectedFileStatus("Select a File First")
            return
        }

        const formData = new FormData()
        formData.append("file", selectedFile)

        try {
            const response = await fetch("http://localhost:5000/upload", {
                method: "POST",
                body: formData
            })

            const data = await response.json()
            if (response.ok) {
                setSelectedFileStatus(data.message)
            } else {
                setStatus(data.error || 'Upload failed.')
            } 
            
        } catch (e) {
            console.e('Error uploading file:', error)
            setStatus('An error occurred during upload.')
        }
        
    }

    return (
        <div>
            <h1>API-Lens</h1>
            <button onClick={handleCheckBackend}>check backend</button>
            <div>{backendMessage}</div>  

            <div>
                <form method='post' onSubmit={handleUpload}> 
                    <input type="file" onChange={handleFileChange} accept='.json' /> 
                    <button type="submit">upload</button>
                    {selectedFilesStatus && <p>{ selectedFilesStatus}</p>} 
                </form>

            </div>

    </div>
  )
}
