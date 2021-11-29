import React from 'react'

export default function Random(props) {
    let {min, max} = props
    min = Math.ceil(min);
    max = Math.floor(max);
    let random = Math.floor(Math.random() * (max - min + 1) + min); 

    return (
        <div className="greetings">
            Random value between {min} and {max} => {random}
        </div>
    )
}
