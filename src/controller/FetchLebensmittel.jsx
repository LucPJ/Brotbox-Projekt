import {client} from '../components/client';

export async function getLebensmittel (contentType){
    
    const data = await client.getEntries({ content_type: contentType });
    const response = data.items;

    return response;
}


export async function getFilteredLebensmittel(kategorie){
 
    const data = await getLebensmittel('lebensmittel');
    const filtered = data.filter(item => kategorie.replace(/-/g," ").toLowerCase() === item.fields.kategorien.fields.kategorien.replace(/-/g," ").toLowerCase());
    
    return filtered;
}

export function addLebensmittelToList(data){

        const requestLebensmittel = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }
    
    fetch('http://localhost:3000/lebensmittel', requestLebensmittel)
        .then((res) => res.JSON())
        .then((data)=> console.log(data))
}