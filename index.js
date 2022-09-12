const getTip = (value) =>{
 const bill= document.getElementById('bill').value;
 const result = (value / 100) * bill
 console.log(result);

 document.getElementById('tip-amount').innerHTML = result
}

