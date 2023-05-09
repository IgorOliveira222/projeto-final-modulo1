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

// async function metodo (batata) {
//     return fetch("http://localhost:3000/Sections" , {
//         method: 'POST',
//             headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-Type':'application/json'
//             }, 
//             body: JSON.stringify(batata)
//         })
// }

// async function sendingUserDate () {

//     const CPFUser = document.querySelector('#CPF')
//     const NameUser = document.querySelector('#Name')
//     const DateBirthUser = document.querySelector('#DateBirth')
//     const EmailUser = document.querySelector('#E-mail')
//     const GenderUser = document.querySelector('#Gender')
//     const NationalityUser = document.querySelector('#Nationality')
//     const NaturalnessUser = document.querySelector('#Naturalness')
//     const ProfessionUser = document.querySelector('#Profession')
//     const SchoolingUser = document.querySelector('#Schooling')
//     const MaritalStatusUser = document.querySelector('#MaritalStatus')
//     const motherUser = document.querySelector('#mother')
//     const fatherUser = document.querySelector('#father')


//     const newPatient = {
//         id:"",
//         cpf:CPFUser.value,
//         name:NameUser.value,
//         birth:DateBirthUser.value,
//         email:EmailUser.value,
//         gender:GenderUser.value,
//         Nationality:NationalityUser.value,
//         Naturalness:NaturalnessUser.value,
//         Profession:ProfessionUser.value,
//         Schooling:SchoolingUser.value,
//         MaritalStatus:MaritalStatusUser.value,
//         mother:motherUser.value,
//         father:fatherUser.value,
//     }

//     console.log(newPatient);
//     await metodo(newPatient)
//     setTimeout(() => {
//         document.location.reload();
//     },500);
// }
