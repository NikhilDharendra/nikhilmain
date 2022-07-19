var arr = JSON.parse(localStorage.getItem("student_data"))||[]
// 25 june 2022 mistake:-yaha par agr empty array loge to dashboard p har baar khaali ek hi image dikhegi jo bhi new add ki jaayegi isliye parse karna jruri hai
function getData(event){
    event.preventDefault()
    document.getElementById("form")
    let obj = {
        name : form.name.value,
        photo:form.image.value,
        course:form.course.value,
        batch:form.batch.value,
        unit :form.unit.value

    }
    arr.push(obj)
    localStorage.setItem("student_data",JSON.stringify(arr))
    window.location.href ="dashboard.html"
}
function calculate(){
    var count = 0
    let arr = JSON.parse(localStorage.getItem("student_data"))||[]
    let obj = {};
    for(var i = 0 ; i <arr.length;i++){
        if(!obj[arr[i].batch]){
            obj[arr[i].batch]=0;
        }
    }
    for(var i = 0 ; i<arr.length;i++){
        obj[arr[i].batch]++;
        count++
        console.log(obj)
    }
    
   document.getElementById("count").innerText=count

}
calculate()