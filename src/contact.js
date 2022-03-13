import React,{useEffect, useState} from "react";

function Contact()
{

    const [name, setName] = useState("ankit")
    useEffect(()=>{
        console.warn("hello from hook")
    })

    let data="contact us component"

    return(
        <div>
            <h1>Contact us page</h1>
            <h2>{data}</h2>
            <h2>{name}</h2>
            <button onClick={()=>setName("Ankit Dewangan")}>Update Name</button>
        </div>
    )
}

export default Contact