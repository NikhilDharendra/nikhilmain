document.querySelector("#sum_value").innerText=localStorage.getItem("sumvalue");
var sum = 0
var product_array = JSON.parse(localStorage.getItem("product_key"))
  
product_array.forEach(function (ele,index){
 var dibba= document.createElement("div")
 
 var photo=document.createElement("img")
  photo.setAttribute("src",ele.img)
 photo.setAttribute("class","wid")

 var name=document.createElement("p")
 name.innerText=ele.name
  
var chota=document.createElement("div")
chota.setAttribute("class","box1")
 var price1=document.createElement("p")
 price1.innerText=ele.price
  
 sum=sum+ele.price
 localStorage.setItem("sumvalue",sum)



 var price2=document.createElement("p")
price2.innerText=ele.Discount
 price2.setAttribute("class","price")

 var price3=document.createElement("p")
 price3.innerText="50%"
 price3.setAttribute("class","dis")

chota.append(price1,price2,price3)
 
var del=document.createElement("button")
del.innerText="Delete"
del.style.color="white"
del.style.background="teal"
del.style.padding= "5px 25px 5px 25px"
del.style.borderRadius="5px"
del.style.cursor="pointer"

del.addEventListener("click",function(){
  dellrow(ele,index)
})

var pro=document.createElement("button")
pro.innerText="checkout"
pro.style.color="white"
pro.style.background="green"
pro.setAttribute("class","p1ro")
pro.style.padding= "5px 25px 5px 25px"
pro.style.borderRadius="5px"
pro.style.cursor="pointer"

pro.addEventListener("click",function(){
  checkout(ele,index)
}) 



dibba.append(photo,name,chota,del,pro)
document.querySelector("#cart").append(dibba)

function dellrow(ele,index){
 product_array.splice(index,1)
 localStorage.setItem("product_key",JSON.stringify(product_array))
 window.location.reload();
}

function checkout(ele,index){
window.location.href="payment.html"
}

})
