
function showinfo(){

    let name = document.querySelector("input[name='name']").value
    let color = document.querySelector("select[name='color'] option:checked").text
    let likePrograming = document.querySelector("input[name='like-programming'] option:checked").value
    let developerOptions = document.querySelectorAll("input[name='developer-options']:checked")

    let optionsValue = []

    developerOptions.forEach(element => {optionsValue.push(element.value)})

    let opitionsChecked = optionsValue.join("- ")

    alert("nome: " + name + "\nCor primária: " + color + "\nGosta de Programar? " +  likePrograming + 
    "\n Conhecimentos em programação: " + opitionsChecked)
    

}