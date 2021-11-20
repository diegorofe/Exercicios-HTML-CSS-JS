// let timeout = setTimeout(() => {
//     console.log("Executando após 2 segundos")
// }, 2000 )

// clearTimeout(timeout)

let secunds = 0
let interval = setInterval(() => {
    secunds += 1
    
    console.log(`Executando a cada ${secunds} segundos`)

    if(secunds == 10) clearInterval(interval)
}, 1000 )