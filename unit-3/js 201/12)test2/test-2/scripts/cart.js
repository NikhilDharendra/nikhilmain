var arr = JSON.parse(localStorage.getItem("cart_items"))||[]

var total = 0

    arr.forEach(function(elem,index){
     let div = document.createElement("div")
     div.setAttribute("class","item")
     let name = document.createElement("p")
     name.innerText= elem.name
     name.setAttribute("class","text")
     let price = document.createElement("p")
     price.setAttribute("class","text")
     price.innerText= elem.price
     total = total+elem.price
     document.getElementById("cart_total").innerText=total
     let image = document.createElement("img")
     image.src = elem.image
     image.setAttribute("class","photo")
     let btn = document.createElement("button")
     btn.innerText= "remove"
     btn.setAttribute("class","remove")
     btn.addEventListener("click",function(){
         Remove(elem,index)
     })
     div.append(image,name,price,btn)
     document.getElementById("cart").append(div)
 
    })
    function Remove(elem,index){
     arr.splice(index,1)
     localStorage.setItem("cart_items",JSON.stringify(arr))
     window.location.reload()
    }
    
  
    