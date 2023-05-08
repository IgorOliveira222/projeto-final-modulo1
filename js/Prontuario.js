function openModalSection(mn){
    let modal = document.getElementById(mn)

    if(typeof modal == 'undefined' || modal === null)
    return;

    modal.style.display = 'block';
}


function closeModal (mn){
    let modal = document.getElementById(mn)

    if(typeof modal == 'undefined' || modal === null)
    return;

    modal.style.display = 'none';
}


function openModalFacts(mn){
    let modal = document.getElementById(mn)

    if(typeof modal == 'undefined' || modal === null)
    return;

    modal.style.display = 'block';
}