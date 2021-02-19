const duration = setInterval(main_fun,20)

function main_fun(){
    const precentage = document.querySelector('.percentage')
    const line = document.querySelector('.line')

    let percentage_val = window.getComputedStyle(line,':before').getPropertyValue('width')
    percentage_val = Math.floor((parseInt(percentage_val)/9.5)*2)
    precentage.innerHTML = percentage_val + '%'
    if(percentage_val==100){
        clearInterval(duration)
    }
}