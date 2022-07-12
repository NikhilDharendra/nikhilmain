function nikhil(){
   
   event.preventDefault()
    setTimeout(function(){
  alert("Your order is confirmed")
    },0)
    setTimeout(function(){
     alert("Your order is being Packed ")   
    },3000)
    setTimeout(function(){
       alert("Your order is in transit") 
    },8000)
    setTimeout(function(){
      alert(" Your order is out for delivery ")  
    },10000)
    setTimeout(function(){
       alert(" Order delivered") 
    },12000)
}
// 0 seconds : Your order is confirmed 
// 3 seconds : Your order is being Packed 
// 8 seconds : Your order is in transit  
// 10 seconds : Your order is out for delivery 
// 12 seconds : Order delivered