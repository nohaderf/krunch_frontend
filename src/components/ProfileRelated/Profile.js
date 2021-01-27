import React, {useEffect, useState} from "react"
import Charts from "./Charts.js"

function Profile(){
    const [user, setUser] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/users/2`)
        .then(r => r.json())
        .then(data => {
            setUser(data)
            setIsLoaded(true)
        })
    }, [])

    if (!isLoaded) return <h2>Loading...</h2>;

    const {name, age, bio, height, weight } = user

    return (
        <>
        <h1 className="page-header">&nbsp;Profile</h1>
        <div className="profile-div">
            <div className= "user">
                
                <br></br>
                <h2>{name}</h2>
                <p>Member since: 2020</p>
                <p>Height: {height}</p>
                <p>Weight: {weight}</p>
                <p>Age: {age}</p>
                <p>Bio: {bio}</p>
            </div>
            <div className="chart-container">
                <h1>Track Your Progress</h1>
                <Charts />
            </div>
        </div>
    </>
    )
}

export default Profile;