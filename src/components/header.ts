import {locations} from '../Constants/locations'


export const header = ()=>{
    const showSuggestions = document.querySelector('#show-suggestions') 
    const suggestions  = document.querySelector('.nav-search_suggestion')! as HTMLDivElement
    showSuggestions?.addEventListener('click', ()=>{
        const visible = suggestions.style.visibility
        suggestions.style.visibility = visible==="visible" ? "hidden" : "visible";
    });
    locations.forEach(element  => {
        const html = `        <div id="${element.id}" name="${element.name}">
                                <h3><b>${element.name}</b></h3>
                                <p>${element.state}, India</p>
                            </div>`
        suggestions.insertAdjacentHTML('beforeend', html);                    
    });
    console.log(locations.length)
}
