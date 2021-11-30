import { useState } from "react";

function LikeButton(){
    
    let [count, setCount] = useState(0)
    function handleClick(event){
        setCount(count+1)
        console.log(count)
    }



    let colors = ['purple','blue','green','yellow','orange','red']
    let randomColor = colors[Math.floor(Math.random()* colors.length)]
    
    return (
        <button style={ {backgroundColor: randomColor} } onClick={handleClick}>
            Like {count}
        </button>
    )

}

export default LikeButton