import React, {useState} from 'react';
import { useParams } from "react-router-dom";

export default function KategorieFiltered(){
    
    const {kategorie} = useParams()
    
    

    return (
        <h1>filterd kategorie</h1>
    )
}