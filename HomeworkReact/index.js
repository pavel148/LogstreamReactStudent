
let a = Math.floor(Math.random() * 100);
function manyChecks1(a){
    console.log(a);
    let result;
    if( a> 10){
        result = a;
    }
    else{
        result = a*2;
    }
    if(result >5){
        result = (2 * a) + 1 ;
    }
    else{
        if(result<3){
            result =1;
        } else{
            result =  2 * (a - 2);
        }
        if (result>4){
            result=5;
        } else{
            if(result%2==0){
                result = 6;
            } else{
                result = 7;
            }
        }
    }
    
console.log(result);
}

manyChecks1(a)


function manyChecks() {
    let a = Math.floor(Math.random() * 20) + 1;
    let str='';
    console.log(`a = ${a}`);
    if(a>10){
      str+= a+' is bigger than 10';     
    }else{
        str+= a+' is less than or equal to 10 ';     
    }
    if(a===5){
        str+=' an example of a special case' ;
    } else{
        str+=' but a is not 15' ;
    }
    if(a>5){
        str+=' and a is greater than 5' ;
    }else{
        str+=' and a is less than or equal to 5'; 
    }
    if( a % 2 ){
        str += ' and a is odd';
    }
    else{
        str += ' and a is odd';
    }
    return str;
  }
  
 console.log( manyChecks());