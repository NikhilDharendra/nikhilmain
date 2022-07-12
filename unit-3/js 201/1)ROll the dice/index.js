function submit(){
        
    var a = document.querySelector("#member1");
    a.innerText = Math.floor(Math.random()*6)+1;
    var b = document.querySelector("#member2");
    b.innerText = Math.floor(Math.random()*6)+1;
    var c = document.querySelector("#member3");
    c.innerText = Math.floor(Math.random()*6)+1;
    if(a.innerText>b.innerText&&a.innerText>c.innerText){
        winner.innerText ="Member A"
        a.setAttribute("class","A1")
        b.setAttribute("class","B1")
        c.setAttribute("class","C1")

        // a.style.backgroundcolor = "green"
        // b.style.backgroundcolor="yellow"
        // c.style.backgroundcolor = "red"

    }
    else if(b.innerText>a.innerText&&b.innerText>c.innerText){
        winner.innerText ="Member B"
        b.setAttribute("class","A1")
        a.setAttribute("class","B1")
        c.setAttribute("class","C1")
        // b.style.backgroundcolor = "green"
        // a.style.backgroundcolor = "yellow"
        // c.style.backgroundcolor ="red"
    

        
    }
    else if(c.innerText>b.innerText&&c.innerText>a.innerText){
        winner.innerText ="Member C"
        c.setAttribute("class","A1")
        a.setAttribute("class","B1")
        b.setAttribute("class","C1")
        // c.style.backgroundcolor = "green"
        // a.style.backgroundcolor = "yellow"
        // b.style.backgroundcolor ="red"

        
    }
    else{
        winner.innerText = "DRAW"
        a.setAttribute("class","A2")
        b.setAttribute("class","A2")
        c.setAttribute("class","A2")
        // a.style.backgroundcolor = "blue"
        // b.style.backgroundcolor ="blue"
        // c.style.backgroundcolor ="blue"

    }
}




//  function submit(){

//     var a =document.getElementById(member1)
//     a.innerText=Math.floor(Math.random()*6)+1
//     var b =document.getElementById(member2)
//     b.innerText=Math.floor(Math.random()*6)+1
//     var c =document.getElementById(member3)
//     c.innerText=Math.floor(Math.random()*6)+1



//     if(a.innerText>b.innerText&&a.innerText>c.innerText){
//       winner.innerText= "Winner=A" 
//       a.style.color="green"
//       b.style.color="yellow"
//       c.style.color="red" 
//     }
//     else if(b.innerText>a.innerText&&b.innerText>c.innerText){
//         winner.innerText= "Winner=B" 
//       b.style.color="green"
//       a.style.color="yellow"
//       c.style.color="red"  
        
//     }
//     else if(c.innerText>b.innerText&&c.innerText>a.innerText){
//         winner.innerText= "Winner=C" 
//         c.style.color="green"
//         a.style.color="yellow"
//         b.style.color="red" 
//     }
//     else if(a.innerText===b.innerText&&b.innerText===c.innerText&&a.innerText===c.innerText){

//         winner.innerText= "DRAW" 
//         a.style.color="blue"
//         b.style.color="blue"
//         c.style.color="blue" 
//     }

//  }
 
