import React, { useState } from "react";

function CountButton () {
 const [click, setClick] = useState(false);
 const [clickCount, setClickCount] = useState(0);
 return (<button onClick = {() => {
     setClick(!click)
     setClickCount(clickCount + 1)}}>Click Count: {clickCount}</button>
 )}

export default CountButton;