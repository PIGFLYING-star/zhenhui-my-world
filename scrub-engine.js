const video=document.getElementById("worldVideo");
const title=document.getElementById("title");
const loader=document.getElementById("loader");

video.addEventListener("loadeddata",()=>{
 loader.style.display="none";
});

window.addEventListener("scroll",()=>{
 const max=document.body.scrollHeight-window.innerHeight;
 const progress=Math.min(window.scrollY/max,1);

 if(video.duration){
   video.currentTime=progress*video.duration;
 }

 const index=Math.min(
   Math.floor(progress*SCENES.length),
   SCENES.length-1
 );
 title.textContent=SCENES[index].title;
});
