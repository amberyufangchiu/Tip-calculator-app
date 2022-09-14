const getTip = (value) =>{
 const bill= Number(document.getElementById('bill').value);
 const ppl = Number(document.getElementById('ppl').value);

 //tips
 let result = 0;
 if(ppl){
   result = ((value / 100) * bill) / ppl;
 }else{
   result = (value / 100) * bill;
 }
 document.getElementById('tip-amount').innerHTML = result

 //total
 let total = 0; 
 ppl ? total= ((bill/ppl) + result) : total= Number(bill)+result;
 document.getElementById('ppl-amount').innerHTML = total;
}

const resetBtn = () =>{
 document.getElementById('bill').value = 0;
 document.getElementById('ppl').value = 0;
 document.getElementById('tip-amount').innerHTML = 0;
 document.getElementById('ppl-amount').innerHTML = 0;
}