import React from 'react'
import { Link } from 'react-router-dom';

export default function LebensmittelCard({title, imgSrc, imgAlt, kategorie}){

    //manage State für auswahl des lebensmittels
    
    const customLink = `/lebensmittel/${title}`
    return(
        <div>
                <Link to={customLink}>
                <h3>{title}</h3>
                <div><img 
                        src={imgSrc} 
                        alt={imgAlt}
                    />
                </div>
                </Link>
            </div>
    )
}