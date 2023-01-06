import React, {useState, useEffect} from 'react';
import { getLebensmittel } from '../../controller/FetchLebensmittel';
import Navigation from '../Navigation';

import LebensmittelCard from './LebensmittelCard';

export default function Lebensmittel(){

    const [lebensmittelItems, setLebensmittelItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function getAllLebensmittelData(){
        setIsLoading(true)
        const data = await getLebensmittel('lebensmittel');  
        setLebensmittelItems(data);
        setIsLoading(false)
    }
    
    useEffect(()=>{
        getAllLebensmittelData()
    },[])

    if(isLoading){
        return <div>loading...</div>
    }

   const lebensmittelListe = lebensmittelItems.map((item) => {
        
        const keyID= item.sys.id;

        return(
            <LebensmittelCard key={keyID} title={item.fields.lebensmittel} imgSrc={item.fields.lebensmittelBild.fields.lebensmittelBild.fields.file.url} alt={item.fields.lebensmittelBild.fields.bildname} kategorie={item.fields.kategorien.fields.kategorien}/>
        )

    }) 

    return(
        <div>
            
            <h1>Lebensmittel</h1>
            {lebensmittelListe}
        </div>
    )
}