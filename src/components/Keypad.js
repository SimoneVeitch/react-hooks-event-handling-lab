// Code Keypad Component Here
import React from "react";

function Keypad (){
    return (
        <form>
        <input type="password" onChange={event => console.log('Entering password...')} />
        </form>
    )
}

export default Keypad;