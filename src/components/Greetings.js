import React from 'react'

export default function Greetings(props) {
    let {lang, children} = props
    let text = ""
    
    if (lang == "de") {
       text = "Guten tag"
    }
    else if (lang == "fr") {
        text = "Bonjour"
    }
    else if (lang == "en") {
        text = "Hello"
    }
    else if (lang == "es") {
        text = "Hola"
    }
    return (
        <div className="greetings">
            {text} {children}
        </div>
    )
}