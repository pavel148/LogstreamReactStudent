
let text = '';
function sym(x, y){
    return x+y;
}

function minus(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function division(x,y){
    let res= y!=0 ?   x/y : false
    return res;
}

function get_number(id){
    
    text += number;
    document.getElementById('expression').value = text;

}

function get_operation(id){
    
    text += operator;
    document.getElementById('expression').value = text;
}

function calculate() {
    let number1='';
    let number2='';
    try {
        result = eval(text);
        document.getElementById('conclusion').textContent = result;
    } catch (error) {
        document.getElementById('conclusion').textContent = 'Error';
    }
}