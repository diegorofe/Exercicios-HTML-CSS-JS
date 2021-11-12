function save() {
    
    let name = document.querySelector("input[name='name']").value
    let programLanguage = document.querySelector("select[name='program']").value

    alert("nome: " + name + "\nLinguagem que programa: " + programLanguage)
}