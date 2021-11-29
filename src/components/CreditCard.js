import React from 'react'

export default function CreditCard(props) {
    let {type, number,expirationMonth, expirationYear,bank, owner, bgColor, color} = props
    let str = number.replace(/.(?=.{4})/g, '•')
    let twoNumber = ("0" + expirationMonth).slice(-2)
    const divStyle = {
        backgroundColor: bgColor,
        borderRadius: "10px",
        padding: "10px",
        margin: "15px",
        color: color,
        width: "300px",
        height: "180px",
   }

    return (
    <div style={divStyle} className="creditCard">
        <h6 className="typeCard">{type}</h6>
        <h1>{str}</h1>
        <p>Expires {twoNumber}/{expirationYear}  &nbsp; &nbsp; &nbsp; {bank}</p>
        <p>{owner}</p>
    </div>
    )
}