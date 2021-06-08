function clearBtn() {
    document.getElementById("textField").value=""
    console.log(value)
}
function buttonClick(val){
    document.getElementById("textField").value+=val
    console.log("Value printing fine")
}
function equalClick(){
    var text = document.getElementById("textField").value
    var result = eval(text)
    document.getElementById("textField").value=result
    console.log("Result getting fine")
}
function erase() {
    var value = document.getElementById("textField").value;
    document.getElementById("textField").value = value.substr(0, value.length - 1);
}