const input = document.getElementById('input')
let  result = document.getElementById('result')
const inputOptions = document.getElementById('inputOptions')
const outputOptions = document.getElementById('outputOptions')
function conversion(){
    if(inputOptions.value == "bit" && outputOptions.value == "bit"){
        result.value = input.value
    }
    else if(inputOptions.value == "bit" && outputOptions.value == "kb" ){
        result.value= (input.value/1024).toFixed(4)
    }
    else if(inputOptions.value == "bit" && outputOptions.value == "mb"){
        result.value= (input.value/1.049e+6).toFixed(4)
    }
    else if(inputOptions.value == "bit" && outputOptions.value == "gb"){
        result.value= (input.value/1.074e+9).toFixed(4)
    }
    else if(inputOptions.value == "bit" && outputOptions.value == "tb"){
        result.value= (input.value/1.1e+12).toFixed(4)
    }
}
setInterval(conversion,0.1)