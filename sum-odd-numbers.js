function sum_odd(){
 // the range between 1 to 5000
  
  var sum=0;
  for(let i =1; i<=5000; i++){
   if(i%2 !== 0){
     sum +=i;
     
     
   }
    
  }
  console.log(sum);
  
}
