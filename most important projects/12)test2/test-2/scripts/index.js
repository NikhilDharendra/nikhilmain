// https://grocery-masai.herokuapp.com/items
   var arr = JSON.parse(localStorage.getItem("cart_items"))||[]
   var sum = 700;
 async function getData(){
    try{
        let url = " https://grocery-masai.herokuapp.com/items"
        let data = await fetch(url)
        let collect = await data.json()
        // console.log(collect.data)
        // return collect.data
        append(collect.data)
    }
    catch(err){
        console.log(err)
    }
}
getData()

function append(data){
   data.forEach(function(elem){
    let div = document.createElement("div")
    div.setAttribute("class","item")
    let name = document.createElement("p")
    name.innerText= elem.name
    let price = document.createElement("p")
    price.innerText= elem.price
    
    let image = document.createElement("img")
    image.src = elem.image
    image.setAttribute("class","photo")
    let btn = document.createElement("button")
    btn.innerText= "Add to cart"
    btn.setAttribute("class","add_to_cart")
    btn.addEventListener("click",function(){
        addTocart(elem)
    })
    div.append(image,name,price,btn)
    document.getElementById("groceries").append(div)

   })
}
function addTocart(elem){
    arr.push(elem)
    localStorage.setItem("cart_items",JSON.stringify(arr))
    if(elem.price>sum){
        alert("Insufficient balance")
    }
    if(elem.price<sum){
        sum = sum-elem.price
        document.getElementById("wallet").innerText= sum
    }
    
    
      
    
  
    // window.location.href="cart.html"
}
