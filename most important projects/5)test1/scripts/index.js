//store the products array in localstorage as "data"
let arr = JSON.parse(localStorage.getItem("data"))||[]
function getItem(event){
    event.preventDefault()
    let obj = {
        brand: product_form.product_brand.value,
name: product_form.product_name.value,
price: product_form.product_price.value,
image: product_form.product_image.value
    }
     arr.push(obj)
    localStorage.setItem("data",JSON.stringify(arr))
    window.location.href="inventory.html"
}








// after test 27/6/22......using constructor function
// function StoreData(b,n,p,i){
//     this.brand = b,
//     this.name = n,
//     this.price = p,
//     this.image = i
    
// }
// let x = new StoreData("nike","shoe","1200","image")
// console.log(x)
// is trh ek object create hota jise ek array m push karta then same process
// dusre function  m iss trh is execute karta iss constructor function ko
//        brand: product_form.product_brand.value,
// name: product_form.product_name.value,
// price: product_form.product_price.value,
// image: product_form.product_image.value
// let x = new StoreData(brand,name,price,image)
// arr.push(x)

