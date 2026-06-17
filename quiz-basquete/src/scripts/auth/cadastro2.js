let pessoa = JSON.parse(sessionStorage.getItem('pessoa'))

console.log(pessoa)

if (pessoa) {
    let spans = document.querySelectorAll('span')

    spans[0].textContent = pessoa.nome
    spans[1].textContent = pessoa.email
    spans[2].textContent = pessoa.dataNascimento
    spans[3].textContent = pessoa.endereco
    spans[4].textContent = pessoa.estado
    spans[5].textContent = pessoa.sexo
}