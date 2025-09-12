async function include(element, page){
    var contentObject = await fetch(page);
    var contentHTML = await contentObject.text();
    element.innerHTML = contentHTML;
}

function includeall(){
    document.querySelectorAll("[data-include]").forEach(
        el=>include(
            el, el.getAttribute("data-include")
        )
    )
}