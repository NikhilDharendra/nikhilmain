
    var stu_arr=JSON.parse(localStorage.getItem("student_data"))
    var sum = stu_arr.reduce(function(acc,elem){
        return acc+Number(elem.course)
    })
    
    
    stu_arr.forEach(function(elem,index){
        let container = document.createElement("div")
        container.setAttribute("class","main_box")
        let photo = document.createElement("img")
        photo.src=elem.photo
        photo.setAttribute("class","gunda")
        let name = document.createElement("p")
        name.innerText=elem.name
        let batch = document.createElement("p")
        batch.innerText=elem.batch
        let course = document.createElement("p")
        course.innerText=elem.course
        
        let btn = document.createElement("button")
        btn.innerText="Remove"
        btn.setAttribute("class","khatka")
        btn.addEventListener("click",function(){
            Remove(elem,index)
        })


        document.getElementById("dashboard").append(container)
        container.append(photo,name,batch,course,btn)
        
        localStorage.setItem("dashboard",JSON.stringify(stu_arr))
        function Remove(elem,index){
    stu_arr.splice(index,1)
    localStorage.setItem("student_data",JSON.stringify(stu_arr))
    window.location.reload()

   }
    })
    function calculate(){
        var count = 0
        let stu_arr = JSON.parse(localStorage.getItem("student_data"))||[]
        let obj = {};
        for(var i = 0 ; i <arr.length;i++){
            if(!obj[stu_arr[i].batch]){
                obj[stu_arr[i].batch]=0;
            }
        }
        for(var i = 0 ; i<arr.length;i++){
            obj[stu_arr[i].batch]++;
            count++
            console.log(obj)
        }
        
       document.getElementById("count").innerHTML=count
   
    }
    calculate()
   
    

