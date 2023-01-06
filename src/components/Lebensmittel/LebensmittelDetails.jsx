import React from "react";
import { useParams } from "react-router-dom";

export default function LebensmittelDetails(){

    const {lebensmittel} = useParams()
    
    return(
        <h1>{lebensmittel}</h1>
    )
}

