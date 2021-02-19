const op = setInterval(a,20)

function a(){
    const precentage = document.querySelector('.percentage')
    const line = document.querySelector('.line')

    let b = window.getComputedStyle(line,':before').getPropertyValue('width')
    b = Math.floor((parseInt(b)/9.5)*2)
    precentage.innerHTML = b + '%'
    console.log(b);
    if(b==100){
        clearInterval(op)
    }
}