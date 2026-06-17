let form = document.querySelector('.form')
form.addEventListener('submit', pegarDados)

export function pegarDados(event) {
    event.preventDefault()

    let pessoa = {
        nome: form.nome.value,
        email: form.email.value,
        endereco: form.endereco.value,
        dataNascimento: form.dataNascimento.value,
        sexo: form.sexo.value,
        estado: form.estado.value
    }

    sessionStorage.setItem('pessoa', JSON.stringify(pessoa))

    location.href = '../../pages/auth/confirmarCadastro.html'
}