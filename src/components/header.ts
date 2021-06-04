import { locations } from "../Constants/locations";
import _ from 'lodash'

export const header = () => {
    const showSuggestions = document.querySelector("#show-suggestions")!;
    const suggestions = document.querySelector(
        ".nav-search_suggestion"
    )! as HTMLDivElement;
    const inputLocation = document.querySelector(
        "#location"
    )! as HTMLInputElement;

    document.querySelector("body")?.addEventListener("click", () => {
        suggestions.style.visibility = "hidden";
        showSuggestions.classList.remove("nav-search_suggestion_svg-rotate");
    });
    showSuggestions?.addEventListener("click", (event) => {
        event.stopPropagation();
        const visible = suggestions.style.visibility === "visible";
        suggestions.style.visibility = visible ? "hidden" : "visible"; ////Hide Dropdown
        !visible
            ? showSuggestions.classList.add("nav-search_suggestion_svg-rotate")
            : showSuggestions.classList.remove("nav-search_suggestion_svg-rotate");
            loadSuggestions(locations)
    });
    const loadSuggestions = (arr = locations) => {
        suggestions.innerHTML = ''
        arr.forEach((element) => {
            ///Fetch Locations
            const html: string = ` <div id="${element.id}" name="${element.name}">
                                       <h3><b>${element.name}</b></h3>
                                       <p>${element.state}, India</p>                
                                   </div>`;

            suggestions.insertAdjacentHTML("beforeend", html);
            document.getElementById(element.id)?.addEventListener("click", (event) => {
                event.preventDefault();
                inputLocation.value = element.name;
            });
        });

    }
    loadSuggestions()

    inputLocation.oninput = () => {
        if (! inputLocation.value ) {
            loadSuggestions([])
            suggestions.style.visibility = "hidden";
            showSuggestions.classList.remove("nav-search_suggestion_svg-rotate")
        }

        else if (inputLocation.value.length >= 0) {
            loadSuggestions(_.filter(locations, location => isSubString(location.name, inputLocation.value) || isSubString(location.state, inputLocation.value)))
            suggestions.style.visibility = "visible";
            showSuggestions.classList.add("nav-search_suggestion_svg-rotate")
        }
        else {
            suggestions.style.visibility = "hidden";
            showSuggestions.classList.remove("nav-search_suggestion_svg-rotate")
        }
    }
};

const isSubString = (s1: string, s2: string): boolean => {

    return s1.toUpperCase().includes(s2.toUpperCase())
}