
let feedbackDay = document.querySelector('.data-day')
let feedbackMonth = document.querySelector('.data-month')
let feedbackYear = document.querySelector('.data-year')

function mostrarIdade(idade, idadeMonths, idadeDays){
    
    feedbackDay.textContent = idadeDays
    feedbackMonth.textContent = idadeMonths
    feedbackYear.textContent = idade

}
function calculatorAge(){
    let diaNascimento = parseInt(document.querySelector('#day-text').value)
    let mesNascimento = parseInt(document.querySelector('#month-text').value)
    let anoNascimento = parseInt(document.querySelector('#year-text').value)
    
    if ( diaNascimento.toString().length > 2 || mesNascimento.toString().length > 2 || anoNascimento.toString().length > 4) {
        alert(' Digite apenas 2 números para dia, 2 para mês e 4 para ano. ')
        throw Error ('  Campo de preenchimento vazio ou o uso de letras inadequadamente. ')

    } else if (mesNascimento > 12 || mesNascimento < 1){
        alert('Digito de mês invalido')
        throw Error ('Digito de mês INVALIDO!')
    }else if (diaNascimento > 31 || diaNascimento < 1){
        alert('Digito de dia INVALIDO! ')
        throw Error ('Digito de mês INVALIDO!')
    }
    console.log(diaNascimento)
    console.log(mesNascimento)
    console.log(anoNascimento)

    let dataAtual = new Date()
    let diaAtual = dataAtual.getDate()
    let mesAtual = dataAtual.getMonth() + 1 
    let anoAtual = dataAtual.getFullYear()

    let idade = anoAtual - anoNascimento
    let idadeDays = diaAtual - diaNascimento

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)){
        idade --
    }
    if (mesAtual < mesNascimento)
        mesAtual += 12

        if (idadeDays < 0) {
            //Estamos pegando a data por inteiro, ano,mes e dia. Neste caso, o dia será o ultimo dia do mês anterior. Em Javascript, o número 0 em um objeto de Date() irá pegar o total de dias do ultimo mes. Sempre se lembre que os meses na programação são de base 0.
            let dataUltimoMes = new Date(anoAtual, mesAtual-1, 0); // Obtém o último dia do mês anterior
            //Aqui iremos pegar o número negativo que temos, e usa-lo para somar com o total de dias do mês anterior, consebuindp
            idadeDays += dataUltimoMes.getDate(); // Adiciona o número de dias do último dia do mês anterior
            dataUltimoMes.setDate(1)
            mesAtual--; // Reduz o número do mês atual
        }
    let idadeMonths = mesAtual - mesNascimento

    mostrarIdade(idade, idadeMonths, idadeDays)
    

}
