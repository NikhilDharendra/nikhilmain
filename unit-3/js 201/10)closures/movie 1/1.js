// https://developers.themoviedb.org/
async function getData(){
    try{
        let url = "https://developers.themoviedb.org/"
        let data = await fetch(url)
        let collect = await data.json()
        console.log(collect)
    }
    catch(err){
        console.log(err)
    }
}
getData()