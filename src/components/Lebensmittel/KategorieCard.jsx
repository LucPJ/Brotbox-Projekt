import React from 'react'
import { Link } from 'react-router-dom';

export default function KategorieCard({title, imgSrc, imgAlt, }){
 const titleFormated = title.replace(/\s+/g, '-').toLowerCase()
 console.log(titleFormated)
    const customLink = `/kategorien/${titleFormated}`
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