
let text = '';
var result;
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

function clearCalculator() {
    console.log(1)
    text = "";
    result = 0;
    document.getElementById('history_operations').textContent = "";
    document.getElementById('conclusion').textContent = "";
    document.getElementById('expression').value = "";
}

function get_number(id){
    
    text +=  document.getElementById(id).value;
    document.getElementById('expression').value = text;

}
function append(){
    document.getElementById('history_operations').textContent += '\n';
    document.getElementById('history_operations').textContent += result;
    

}
function get_operation(id){
    text +=  id;
    document.getElementById('expression').value = text;
}

function calculate() {
    try {
        result = eval( document.getElementById('expression').value);
        document.getElementById('conclusion').textContent = result ;
        console.log(result)
       append()
       text=''
       result=""
    } catch (error) {
        document.getElementById('conclusion').textContent = 'Error';
        
    }
}