
function display(val){

    document.getElementById("result").value +=val;

}


function solve() {
    let x= document.getElementById("result").value
    let y= eval(x);
    document.getElementById("result").value = y

    console.log
    
}

function clearScreen() {
    document.getElementById("result").value =""
}
