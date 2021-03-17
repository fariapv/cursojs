const valor = 'Global'

function minhaF() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaF()
}

exec()