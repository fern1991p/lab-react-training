import React from 'react'


export default function IdCard(props) {
    let {lastName, firstName, gender, height, birth, picture} = props
    console.log(birth)
    return (
        <div className="card">
            <img src={picture} className="profilePicture" alt="profilepic"></img>
            <div>
                <h6><b>First name: </b>{firstName}</h6>
                <h6><b>Last name: </b>{lastName} </h6>
                <h6><b>Gender: </b>{gender} </h6>
                <h6><b>Height: </b>{height} </h6>
                <h6><b>Birth: </b>{birth.toDateString()}</h6>
            </div>
        </div>
    )
}