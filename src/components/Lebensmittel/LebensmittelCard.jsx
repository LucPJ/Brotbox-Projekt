import React from 'react'
import { Link } from 'react-router-dom';
import './main.css';

export default function LebensmittelCard({title, imgSrc, imgAlt, kategorie}){

    //manage State für auswahl des lebensmittels
    
    const customLink = `/lebensmittel/${title}`
    return(
        <div className='lebensmittel-card'>
                <Link to={customLink}>
                <h3>{title}</h3>
                <img 
                        src={imgSrc} 
                        alt={imgAlt}
                        className="lebnensmittel-card-img"
                />
                </Link>
            </div>
    )
}