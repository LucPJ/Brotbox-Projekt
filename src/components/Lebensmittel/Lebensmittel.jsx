import React, {useState, useEffect} from 'react';
import {client} from '../client';

export default function Lebensmittel(){

    const [lebensmittelItems, setLebensmittelItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        client.getEntries({ content_type: 'lebensmittel' })
            .then((entry) => setLebensmittelItems(entry.items))
            .catch((err) => console.log(err))
            setIsLoading(false)
    }, [])

    console.log(lebensmittelItems)

   const lebensmittelListe = lebensmittelItems.map((item) => {
        setIsLoading(true)
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
    
    console.log(lebensmittelListe)
    

    if(isLoading){
        return <div>loading...</div>
    }

    const lebensmittelListeKategorie = lebensmittelListe.filter((item) => {
        return(
            <li>{item.fields.kategorien}</li>
        )
    })
    console.log(lebensmittelListeKategorie)

    return(
        <div>
            <h1>Lebensmittel</h1>
            {lebensmittelListe}
        </div>
    )
}