import React, {useState, useEffect} from 'react';
import {client} from '../client';

export default function Kategorien(){

    const [lebensmittelKategorien, setLebensmittelKategorien] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true)
        client.getEntries({ content_type: 'kategorie' })
            .then((entry) => setLebensmittelKategorien(entry.items))
            .catch((err) => console.log(err))
            setIsLoading(false)
    }, [])

    console.log(lebensmittelKategorien)

    if (isLoading) {
        return <div>loading...</div>
    }

    const alleKategorien = lebensmittelKategorien.map((item) => {
        return(
            <div>
                <h3>{item.fields.kategorien}</h3>
                <div><img src={item.fields.kategorienBild.fields.file.url} alt={item.fields.kategorienBild.fields.title}/></div>
            </div>
            )
    })

    return(
        <div>
            <h1>Lebensmittel Kategorien</h1>
            {alleKategorien}
        </div>
    )
}