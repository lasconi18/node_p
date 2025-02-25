const API_URL = "http://localhost:4500/user"

async function loadUsers() {
    const response = await fetch(API_URL)
    const users = await response.json()

    const tbody = document.getElementById("dados")
    tbody.innerHTML = ""
    users.forEach(user => {
        const row = document.createElement("tr")
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <a href="#" onclick="editUser(${user.id})" >Editar</a>
                <a href="#" onclick="deleteUser(${user.id})" >Deletar</a>
            </td>
        `

        tbody.appendChild(row)
    });
}

async function addUser(){

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value

    if(!name || !email){
        alert("preencha todos os campos")
        return
    }

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            name, email
        })
    })

    if(response.ok){
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""

        loadUsers()
        alert('cadastro realizado com sucesso')
    }else{
        alert('houve um erro no cadastro')
    }
}

async function editUser(userId){

    const response = await fetch(`${API_URL}/${userId}`)
    const user = await response.json()

    document.getElementById("name").value = user.name
    document.getElementById("email").value = user.email
    const botao = document.getElementById("botao")

    botao.innerText = "Salvar"
    botao.setAttribute('onclick', `update(${userId})`)
}

async function update(userId){
    alert('chamou')
    alert(userId)

    const name = document.getElementById("name").value
    alert(name)
    const email = document.getElementById("email").value
    alert(email)

    const response = await fetch(`${API_URL}/${userId}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            name, email
        })
    })

    response.ok ? loadUsers() : alert('deu errado o seu edit parsa')

    botao.setAttribute('onclick', 'addUser()')
    botao.innerText = "Enviar"
}

async function deleteUser(userId){

    if(confirm('calmai meu patrao ce ta sabendo ?')){
        const response = await fetch(`${API_URL}/${userId}`, {
            method: "DELETE"
        })

        if(response.ok){
            alert('deletou')
            loadUsers()
        }else{
            alert('deu caca')
        }
    }

}


loadUsers()