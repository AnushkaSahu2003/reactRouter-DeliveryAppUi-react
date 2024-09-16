import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    return (
        <div style={{
            textAlign: 'center', 
            margin: '16px', 
            backgroundColor: 'gray', 
            color: 'white', 
            padding: '16px', 
            fontSize: '24px'
        }}>
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
