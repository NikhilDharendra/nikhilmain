let api_key= "AIzaSyCaOi_eOTWFRUe88aCFsnA6BnMLn9JqCIo"
async function Search(){
  try{
    let query = document.getElementById("input_niks").value
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}r&key=${api_key}`;
    let res = await fetch(url)
    let data = await res.json();
    console.log(data)
    
    append(data.items)
  }
  catch(err){
    console.log(err)
  }
   

}
function append(data) 
{

      let container = document.getElementById("main");
    
      // console.log(data);
      // data.forEach((el) => { el.id.videoId/ el.snippet.title
      data.forEach(({ id: { videoId }, snippet: { title, thumbnails } }) => {
        let div = document.createElement("div");
        let iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.allow = "fullscreen";
        let h3 = document.createElement("h3");
        h3.innerText = title;
    //  let us follow the traditional way
  
        div.append(iframe, h3);
    
        let video = {
          title,
          videoId,
        };
    
        div.onclick = () => {
          playVideo(video);
        };
    
        container.append(div);
      });
    };
    
    let playVideo = (video) => {
     localStorage.setItem("video", JSON.stringify(video));
      window.location.href = "video.html";
    };


    // data.forEach(function(elem){
    //     // in destructuring part I am still confused
    //     let videoID = document.createElement("p")
    //     videoID.innerText=elem.id.videoID
    //     let snippet = document.createElement("p")
    //     snippet.innerText=elem.snippet.title
    //     let div = document.createElement("div");
    //         let iframe = document.createElement("iframe");
    //         iframe.src = `https://www.youtube.com/embed/${videoID}`;
    //         iframe.allow = "fullscreen";
    //         let h3 = document.createElement("h3");
    //         h3.innerText = title;
    // })