import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { getFilteredLebensmittel } from '../../controller/FetchLebensmittel';


export default function KategorieFiltered(){
    
    const {kategorie} = useParams()
    const [filteredList, setFilteredList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    async function filterList(){
        setIsLoading(true)
        const filteredLebensmittel = await getFilteredLebensmittel(kategorie)
        setFilteredList(filteredLebensmittel)
        setIsLoading(false)
    }
    
    useEffect(()=>{
        filterList()
    },[])
    console.log(filteredList)

    if(isLoading){
        return(<h1>isLoading...</h1>)
    }
    const filteredListItems = filteredList.map(item=>{
        return(
            <h1>
            {item.fields.lebensmittel}
            </h1>
        )
    })

    //Fallback setzen, falls es keine ergebnisse zu der kategorie gibt...

    return (
        <>
        <h1>filterd kategorie {kategorie}</h1>
       {filteredListItems}
        </>
    )
}