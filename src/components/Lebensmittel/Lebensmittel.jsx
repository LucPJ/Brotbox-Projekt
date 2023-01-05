import React, {useState, useEffect} from 'react';
import { getLebensmittel } from '../../controller/FetchLebensmittel';


export default function Lebensmittel(){

    const [lebensmittelItems, setLebensmittelItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
       const data = getLebensmittel()
        setLebensmittelItems(data)
   
            
    }, [])



   const lebensmittelListe = lebensmittelItems.map((item) => {
        
        const keyID= item.sys.id;

        return(
            <div key={keyID}>
                <h3>{item.fields.lebensmittel}</h3>
                <div><img 
                        src={item.fields.lebensmittelBild.fields.lebensmittelBild.fields.file.url} 
                        alt={item.fields.lebensmittelBild.fields.bildname}
                    />
                </div>
            </div>
        )

    })
    

    if(isLoading){
        return <div>loading...</div>
    }

    return(
        <div>
            <h1>Lebensmittel</h1>
            {lebensmittelListe}
        </div>
    )
}