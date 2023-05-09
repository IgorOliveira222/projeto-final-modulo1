// Função de abrir e fechar modal 

function openModal(mn){
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

// Função Para salvar dados do input na API db.json

async function metodo (batata) {
    return fetch("http://localhost:3000/listarPacientes" , {
        method: 'POST',
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type':'application/json'
            }, 
            body: JSON.stringify(batata)
        })
}


let editPatient = null


//Const do modal

const CPFUser = document.querySelector('#CPF')
const NameUser = document.querySelector('#Name')
const DateBirthUser = document.querySelector('#DateBirth')
const EmailUser = document.querySelector('#E-mail')
const GenderUser = document.querySelector('#Gender')
const NationalityUser = document.querySelector('#Nationality')
const NaturalnessUser = document.querySelector('#Naturalness')
const ProfessionUser = document.querySelector('#Profession')
const SchoolingUser = document.querySelector('#Schooling')
const MaritalStatusUser = document.querySelector('#MaritalStatus')
const motherUser = document.querySelector('#mother')
const fatherUser = document.querySelector('#father')

async function sendingUserDate () {

    const CPFUser = document.querySelector('#CPF')
    const NameUser = document.querySelector('#Name')
    const DateBirthUser = document.querySelector('#DateBirth')
    const EmailUser = document.querySelector('#E-mail')
    const GenderUser = document.querySelector('#Gender')
    const NationalityUser = document.querySelector('#Nationality')
    const NaturalnessUser = document.querySelector('#Naturalness')
    const ProfessionUser = document.querySelector('#Profession')
    const SchoolingUser = document.querySelector('#Schooling')
    const MaritalStatusUser = document.querySelector('#MaritalStatus')
    const motherUser = document.querySelector('#mother')
    const fatherUser = document.querySelector('#father')


    const newPatient = {
        id:"",
        cpf:CPFUser.value,
        name:NameUser.value,
        birth:DateBirthUser.value,
        email:EmailUser.value,
        gender:GenderUser.value,
        Nationality:NationalityUser.value,
        Naturalness:NaturalnessUser.value,
        Profession:ProfessionUser.value,
        Schooling:SchoolingUser.value,
        MaritalStatus:MaritalStatusUser.value,
        mother:motherUser.value,
        father:fatherUser.value,
    }

    console.log(newPatient);
    await metodo(newPatient)
    setTimeout(() => {
        document.location.reload();
    },500);
}

// Pegar o Paciente 

async function getPatient (batata) {
    const requisicao = await fetch("http://localhost:3000/listarPacientes")
    const patient = await requisicao.json()

}


const addHtml = (batata)=> {
    let newUser = ''
    const addCollunm = document.querySelector(".tableUser")
    batata.forEach((data, posicao)=> {
        newUser = newUser + ` 
        <tr>
        <td class="center">${data.id}</td>
        <td>${data.name}</td>
        <td>${data.cpf}</td>
        <td class="center" id="action">
            <button type="button" class="button-table" ><a href="Prontuario.html"><img src="./img/Document.png" class="img-table" ></a></button>
            <button type="button" class="button-table" onclick="openModalEdit(${data.id})" ><img src="./img/Edit.png" class="img-table" onclick="openModalEdit(${data.id})" ></button>
            <button type="button" class="button-table" ><img src="./img/Delet.png" class="img-table" onclick="deletPatient(${data.id})" ></button>
        </td>
    </tr>
    `
        addCollunm.innerHTML = newUser
    })

}

// Const para filtrar dados 

const filter = async () => {
    const valueInput = document.querySelector("#txtSearch")
    const searchData = valueInput.value
    const apirequisition = await fetch(`http://localhost:3000/listarPacientes?name_like=${searchData}`)
    const renderizatela = await apirequisition.json()

    addHtml(renderizatela)
}


async function showUser (){
    const apirequisition = await fetch("http://localhost:3000/listarPacientes")
    const renderizatela = await apirequisition.json()
    addHtml(renderizatela)
}

showUser()

document.querySelector("#btnSearch").addEventListener('click', filter)

// function modal edit

function renderModal() {
    const edit = document.querySelector("#modalEdit")
    
    edit.style.display = edit ? "block" : "none"
}

async function openModalEdit(mn) {
    const apirequisition = await fetch(`http://localhost:3000/listarPacientes/${mn}`)
    const userData = await apirequisition.json()
    console.log(userData)
    document.querySelector('#CPF2').value = userData.cpf
    document.querySelector('#Name2').value = userData.name
    document.querySelector('#DateBirth2').value = userData.birth
    document.querySelector('#E-mail2').value = userData.email
    document.querySelector('#Gender2').value = userData.gender
    document.querySelector('#Nationality2').value = userData.Nationality
    document.querySelector('#Naturalness2').value = userData.Naturalness
    document.querySelector('#Profession2').value = userData.Profession
    document.querySelector('#Schooling2').value = userData.Schooling
    document.querySelector('#MaritalStatus2').value = userData.MaritalStatus
    document.querySelector('#mother2').value = userData.mother
    document.querySelector('#father2').value = userData.father

    renderModal(userData)
    await sendingUserDateEdit(userData)
}

async function metodoEdit(id, itemList) {
    console.log(id)
    await fetch(`http://localhost:3000/listarPacientes/${id}` , {
        method: 'PUT',
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type':'application/json'
            }, 
            body: JSON.stringify(itemList)
        })
}

async function sendingUserDateEdit(data) {
    editPatient = data
    console.log(editPatient)

    const CPFUser = document.querySelector('#CPF2')
    const NameUser = document.querySelector('#Name2')
    const DateBirthUser = document.querySelector('#DateBirth2')
    const EmailUser = document.querySelector('#E-mail2')
    const GenderUser = document.querySelector('#Gender2')
    const NationalityUser = document.querySelector('#Nationality2')
    const NaturalnessUser = document.querySelector('#Naturalness2')
    const ProfessionUser = document.querySelector('#Profession2')
    const SchoolingUser = document.querySelector('#Schooling2')
    const MaritalStatusUser = document.querySelector('#MaritalStatus2')
    const motherUser = document.querySelector('#mother2')
    const fatherUser = document.querySelector('#father2')


    const newPatientEdit = {
        cpf:CPFUser.value,
        name:NameUser.value,
        birth:DateBirthUser.value,
        email:EmailUser.value,
        gender:GenderUser.value,
        Nationality:NationalityUser.value,
        Naturalness:NaturalnessUser.value,
        Profession:ProfessionUser.value,
        Schooling:SchoolingUser.value,
        MaritalStatus:MaritalStatusUser.value,
        mother:motherUser.value,
        father:fatherUser.value,
    }
    if (editPatient.id){
        await metodoEdit(editPatient.id,newPatientEdit)
    }
    else{
        sendingUserDate(newPatientEdit)
    }

}


async function deletPatient(idPatient) {
    await fetch (`http://localhost:3000/listarPacientes/${idPatient}`,{
        method:'DELETE',
    })
    window.location.reload(true);
    getPatient()
}

getPatient()
