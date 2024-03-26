function displayData(n){
    disp.value+=n
}
function dltNum(){
   disp.value=disp.value.slice(0,-1)
}
function clrNum(){
    disp.value=""
 }

 function findOut(){
    disp.value=eval(disp.value)
 }