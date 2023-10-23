import React from 'react'
import { useState } from 'react'

const ButtonP = () => {
    const [phar, setphar] = useState("text text text text text text text text text text text");
    const [bool, setbool] = useState(true);
    let hide = (bool) => {
        if (bool) {
            setphar("")
            setbool(false)
        } else {
            setphar("text text text text text text text text text text text")
            setbool(true)
        }
    }
    return (
        <div>
            <button onClick={() => hide(bool)}>click me</button>
            <p>{phar}</p>
        </div>
    )
}

export default ButtonP
