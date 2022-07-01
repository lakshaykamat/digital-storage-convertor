const input = document.getElementById('input')
let  result = document.getElementById('result')
const inputOptions = document.getElementById('inputOptions')
const outputOptions = document.getElementById('outputOptions')
function conversion(){
    if(inputOptions.value == "bit" && outputOptions.value == "kb" ){
        result.value= input.value/1024
    }
}
setInterval(conversion,0.1)