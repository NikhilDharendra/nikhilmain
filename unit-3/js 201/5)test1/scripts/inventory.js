var arr = JSON.parse(localStorage.getItem("data"))||[]

arr.forEach(function(elem,index){
    let container = document.createElement("div")
    container.setAttribute("class","box")
    let name = document.createElement("p")
    name.innerText = elem.name
    let price = document.createElement("p")
    price.innerText = elem.price
    let photo = document.createElement("img")
    photo.src = elem.image
    photo.setAttribute("class","pro_img")
    let brand = document.createElement("p")
    brand.innerText=elem.brand
    let btn = document.createElement("button")
    btn.innerText="Remove Product"
    btn.setAttribute("id","remove_product")
    btn.addEventListener("click",function(){
        Remove(elem,index)
    })
    container.append(photo,brand,name,price,btn)
    document.getElementById("products_data").append(container)
    function Remove(elem,index){
        arr.splice(index,1)
        localStorage.setItem("data",JSON.stringify(arr))
        window.location.reload()
        
    }
})
