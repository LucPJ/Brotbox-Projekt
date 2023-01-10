import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { addLebensmittelToList } from '../../controller/FetchLebensmittel';
import './main.css';


export default function LebensmittelCard({lebensmittelId, kalorien, title, imgSrc, imgAlt, kategorie}){

    const selectedLebensmittel = {
        id: lebensmittelId,
        title: title,
        kalorien: kalorien,
        kategorie: kategorie
    }

    function addLebensmittelItem(){
        
        addLebensmittelToList(selectedLebensmittel);
        localStorage.setItem("lebensmittel", JSON.stringify(selectedLebensmittel))
    }

    //const customLink = `/lebensmittel/${title}`
    
    return(
        <div className='lebensmittel-card'>
{/*             <Link to={customLink}>
 */}                <h3>{title}</h3>
                <img 
                    src={imgSrc} 
                    alt={imgAlt}
                    className="lebnensmittel-card-img"
                />
                <h4>{kalorien} kcal</h4>
                <button onClick={addLebensmittelItem}>hinzufügen</button>
{/*             </Link>
 */}        </div>
    )
}