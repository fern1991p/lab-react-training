import React from 'react'

export default function Boxcolor(props) {

    let {r, g, b} = props;

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }
      
    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }

    let hex = rgbToHex(r,g,b)

      

    const divStyle= {
        backgroundColor: "rgb(" + r + "," + g + "," + b + ")",
        border: "1px solid black",
        padding: "10px",
        margin: "15px"
   }


    return (
    <div style={divStyle}>
    rgb({r},{g},{b})
    <p>{hex}</p>
    
    </div>
    )



}