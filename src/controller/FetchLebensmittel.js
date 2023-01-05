//hier wird die fetch function erstellt
import {client} from '../components/client';

export const getLebensmittel =()=>{
    
    let Lebensmittel = 
    client.getEntries({ content_type: 'lebensmittel' })
    .then((entry) =>{
        Lebensmittel = entry
       
    })
    .catch((err) => console.log(err))

    return Lebensmittel
}